'use client'; // Ajoutez cette ligne au début du fichier
import React, { useEffect, useState } from 'react';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import ThemedRadio from '@/components/ThemedRadio';
import { RadioGroup } from '@nextui-org/radio';

interface Album {
  albumName: string;
}

const MemoryCreate = () => {
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { user, loading } = useAuth();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const maxSteps: number = 2;

  const getAlbums = async (username: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/album/getAlbums?username=${username}`
      );
      if (!response.ok) {
        throw new Error('Impossible de contacter l`API');
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setAlbums(data);
      } else {
        console.error('Aucun album trouvé:', data);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des albums:', error);
    }
  };

  const handleDeleteAlbum = async () => {
    if (!selectedAlbum) {
      setError('Veuillez sélectionner un album à supprimer.');
      return;
    }

    console.log('Username:', user?.username); // Vérifiez le nom d'utilisateur
    console.log('Album à supprimer:', selectedAlbum?.albumName); // Vérifiez l'album à supprimer

    try {
      const response = await fetch(
        `http://localhost:8080/album/delete`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user?.username,
            albumName: selectedAlbum?.albumName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete album: ${response.statusText}`);
      }

      console.log('Album supprimé avec succès');
      setAlbums(albums.filter(album => album.albumName !== selectedAlbum.albumName));
      setSelectedAlbum(null);
      setStep(maxSteps); // Passe à l'étape 2 après la suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'album:', error);
      setError('Erreur lors de la suppression de l\'album');
    }
  };

  const handleContinue = () => {
    if (step === 1 && !selectedAlbum) {
      setError('Veuillez sélectionner un album avant de continuer.');
      return;
    }
    setStep(prevStep => prevStep + 1);
    setError(null);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push(siteConfig.href.auth);
    } else if (user?.username) {
      getAlbums(user.username);
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 py-6 text-theme-neutral-invert">
      <div className={'flex w-full'}>
        <div className={clsx('w-full flex-col gap-8', step === 1 ? 'flex' : 'hidden')}>
          <button
            className={'w-fit'}
            onClick={() => {
              router.push(siteConfig.href.home);
            }}
          >
            <span className={'memicon-close text-5xl'} />
          </button>
        </div>
        {error && <p className="mb-4 text-theme-error">{error}</p>}
      </div>
      <form className={'flex w-full flex-col items-center gap-16'}>
        {step === 1 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>
                  Supprime un album
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                {albums.length === 0 ? (
                  <p className="text-theme-neutral-invert">Aucun album trouvé.</p>
                ) : (
                  <RadioGroup
                    className={'flex w-full flex-col gap-3.5'}
                    label=""
                    value={selectedAlbum?.albumName}
                    onChange={(e) => {
                      const albumName = e.target.value;
                      const album = albums.find(album => album.albumName === albumName);
                      setSelectedAlbum(album || null);
                    }}
                  >
                    {albums.map(album => (
                      <ThemedRadio
                        key={album.albumName}
                        value={album.albumName}
                        checked={selectedAlbum?.albumName === album.albumName}
                      >
                        {album.albumName}
                      </ThemedRadio>
                    ))}
                  </RadioGroup>
                )}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <img
                  src={'/images/check.svg'}
                  className={'w-[60px]'}
                  alt={''}
                  width={200}
                  height={200}
                />
                <span className="w-72 text-center font-pangaia text-3xl font-bold leading-10">
                  Ton album a bien été supprimé !
                </span>
              </div>
            </div>
          </>
        )}
      </form>
      {step < maxSteps ? (
        <button
          className={`${buttonStyles()} min-h-12 w-full gap-2 !rounded-full bg-theme-primary px-6 font-raleway text-sm font-bold text-theme-neutral`}
          type="button"
          onClick={handleContinue}
        >
          Continuer
          <span className={'memicon-arrow'} />
        </button>
      ) : (
        <button
          className={`${buttonStyles()} min-h-12 w-full gap-2 !rounded-full bg-theme-primary px-6 font-raleway text-sm font-bold text-theme-neutral`}
          type="button"
          onClick={handleDeleteAlbum}
        >
          Supprimer l'album
          <span className={'memicon-arrow'} />
        </button>
      )}
    </section>
  );
};

export default MemoryCreate;
