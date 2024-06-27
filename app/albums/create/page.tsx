'use client'; // Ajoutez cette ligne au début du fichier

import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React, { useState, useEffect } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const MemoryCreate = () => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [albumName, setAlbumName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState<string | undefined>(user?.username);

    useEffect(() => {
        setUsername(user?.username);
    }, [user]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting form', { albumName, username });

        if (!user) {
            setError('User not authenticated');
            console.error('User not authenticated');
            return;
        }

        const payload = {
            username: username,
            albumName: albumName
        };

        try {
            const response = await fetch(`http://localhost:8080/album/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create album');
            }

            console.log('Album creation successful');
            setSuccess(true);
            router.push(siteConfig.href.albums); // Redirige vers la liste des albums après la création
        } catch (err) {
            console.error('Album creation error:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
        }
    };

    useEffect(() => {
        if (!loading && !user) {
            router.push(siteConfig.href.auth);
        }
    }, [loading, user, router]);

    if (loading) {
        return <p>Loading...</p>; // ou un spinner de chargement
    }

    if (!user) {
        return null; // Ou un composant de chargement supplémentaire
    }

    return (
        <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 py-6 text-theme-neutral-invert">
            <div className={'flex w-full'}>
                <button
                    className={'w-fit'}
                    onClick={() => {
                        router.push(siteConfig.href.home);
                    }}
                >
                    <span className={'memicon-close text-5xl'} />
                </button>
                {error && <p className="mb-4 text-theme-error">{error}</p>}
            </div>
            <div className="flex items-center justify-center mb-4">
                {username ? (
                    <p className="text-theme-neutral text-lg font-semibold">
                        Utilisateur actuel: {username}
                    </p>
                ) : (
                    <p className="text-theme-error text-lg font-semibold">Utilisateur non connecté</p>
                )}
            </div>
            <form className={'flex w-full flex-col items-center gap-16'} onSubmit={handleSubmit}>
                <div className={'flex w-full flex-col items-center gap-11'}>
                    <div className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}>
                        <span className={'font-pangaia text-3xl font-bold leading-10'}>Crée ton album</span>
                        <span className={'font-raleway text-sm font-normal leading-tight'}>
              Décris ton album !
            </span>
                    </div>
                    <div className={'flex w-full flex-col items-center gap-3.5'}>
                        <Input
                            id="albumName"
                            className={'themed-input w-full'}
                            placeholder={'Title'}
                            type="text"
                            value={albumName}
                            onChange={(e) => setAlbumName(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className={`${buttonStyles()} min-h-12 w-full gap-2 !rounded-full bg-theme-primary px-6 font-raleway text-sm font-bold text-theme-neutral`}
                    type="submit"
                >
                    Soumettre
                    <span className={'memicon-arrow'} />{' '}
                </button>
            </form>
        </section>
    );
};

export default MemoryCreate;