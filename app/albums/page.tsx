'use client';import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React, { useState, useEffect } from 'react';
import ThreeIcons from '@/components/images/threeIcons';
import AddIcons from '@/components/images/AddIcons';
import { siteConfig } from '@/config/site';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

// Définition de l'interface Album
interface Album {
  albumName: string;
}

export default function AlbumsScreen() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [albums, setAlbums] = useState<Album[]>([]); // Utilisation de l'interface Album pour typage

  const getAlbum = async () => {
    try {
      const response = await fetch(`http://localhost:8080/album/getAlbums?username=${user?.username}`);
      if (!response.ok) {
        throw new Error('Impossible de contacter l`API');
      }
      const data = await response.json();
      // Vérifiez que la réponse est un tableau d'objets avec au moins un album
      if (Array.isArray(data) && data.length > 0) {
        setAlbums(data); // Met à jour l'état avec les albums complets
      } else {
        console.error('Aucun album trouvé:', data);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des albums:', error);
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push(siteConfig.href.auth);
    } else {
      getAlbum(); // Appel pour récupérer les albums une fois que l'utilisateur est chargé
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading...</p>; // ou un spinner de chargement
  }

  if (!user) {
    return null; // Ou un composant de chargement supplémentaire
  }

  return (
    <>
      <section
        className={
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-theme-neutral-invert px-4'
        }
      >
        <div className={'mb-20 mt-16'}>
          <div className={'relative w-fit'}>
            <ThreeIcons
              className={'absolute -bottom-2 -right-4 h-[20px] w-[54px]'}
              startColor={'var(--theme-primary)'}
              endColor={'var(--theme-secondary)'}
            />
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
              Mes albums
            </h1>
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y-2 relative flex min-h-48 flex-col items-center justify-center pb-6'
        }
      >
        <div className={'w-full px-2'}>
          <div className={'mx-auto flex w-full flex-wrap gap-y-4'}>
            {albums.map((album, index) => (
              index % 2 === 0 && (
                <div key={index} className={'w-full flex justify-between gap-x-4'}>
                  <div className={'w-1/2'}>
                    <AlbumCard album={albums[index]} />
                  </div>
                  {index + 1 < albums.length && (
                    <div className={'w-1/2'}>
                      <AlbumCard album={albums[index + 1]} />
                    </div>
                  )}
                </div>
              )
            ))}
            <div className={'w-1/2 px-2'}>
              <Link
                className={`app-min-h-card theme-shadow relative flex min-h-full w-full min-w-full flex-1 flex-col gap-4 rounded-2xl bg-theme-neutral-invert p-4 text-[102px] *:w-full *:!max-w-full`}
                href={siteConfig.href.albumCreate}
              >
                <AddIcons
                  className={'h-[24px] w-[24px]'}
                  startColor={'var(--theme-primary)'}
                  endColor={'var(--theme-secondary)'}
                  centerColor={'var(--theme-neutral-invert)'}
                ></AddIcons>{' '}
                {/* TODO : replace */}
                <span className={'text-base font-medium text-theme-neutral'}>Mon album perso</span>
                {/* TODO : replace */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Composant de carte d'album réutilisable
const AlbumCard: React.FC<{ album: Album }> = ({ album }) => (
  <div
    className={
      'theme-shadow relative flex aspect-video max-h-[164px] min-h-[164px] w-full flex-wrap gap-4 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
    }
  >
    <Link
      className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
      href={siteConfig.href.uikit} // Remplacez par le lien de détail de l'album si nécessaire
    >
      <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
        <Image
          className={'min-h-full min-w-full object-cover'}
          height={150}
          src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          width={400}
          radius={'none'}
        />
      </div>
      <div
        className={
          'z-10 flex h-full w-full flex-1 items-center p-4 text-theme-neutral-invert'
        }
      >
        <span className={'text-xl font-medium'}>{album.albumName}</span>
      </div>
    </Link>
  </div>
);
