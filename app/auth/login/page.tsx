'use client'; // Ajoutez cette ligne au début du fichier

import React, { useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import FiveIcons from '@/components/images/fiveIcons';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site'; // Ajoutez cette ligne
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginStatus('loading');

    try {
      const response = await fetch(`${process.env.BACK_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || 'Login failed');
      }

      // Login successful
      setLoginStatus('success');
      console.log('Login successful');
    } catch (err) {
      console.error('Login error:', err);
      setLoginStatus('error');
      if (err instanceof Error) {
        setError(err.message || 'An error occurred. Please try again.');
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    }
  };

  return (
    <section className="min-w-screen flex h-full min-h-screen w-full items-center justify-center">
      <div className={'flex w-full flex-col items-center gap-16 px-4'}>
        <span className={'memicon-logo text-[206px]'}></span>
        <div className={'flex w-full flex-col items-center gap-6'}>
          <div className={'relative w-fit pb-7'}>
            <FiveIcons
              className={'absolute -right-2 bottom-2 -rotate-[2.4deg]'}
              startColor={'var(--theme-primary)'}
              endColor={'var(--theme-secondary)'}
            />
            <span className={'font-pangaia text-2xl font-bold'}>Se connecter</span>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          {loginStatus === 'success' && (
            <p className="mb-4 text-theme-success">Login successful!</p>
          )}
          {loginStatus === 'error' && (
            <p className="mb-4 text-theme-error">An error occurred. Please try again.</p>
          )}
          <form onSubmit={handleSubmit} className={'flex w-full flex-col items-center gap-6'}>
            <Input
              required
              className="themed-input text-black"
              id="username"
              label="Pseudo"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              required
              className="themed-input text-black"
              id="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              isExternal
              className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
              href={siteConfig.links.docs}
            >
              {loginStatus === 'loading' ? 'Se connecte à...' : 'Se connecter'}
              <span className={'memicon-arrow'} />{' '}
            </Link>
          </form>
          <div className={'flex w-full flex-col'}>
            <span className={'text-center font-raleway text-sm font-normal'}>
              Vous débutez sur Memini ?
            </span>
            <Link
              className={`justify-center text-center font-raleway text-sm font-bold text-theme-neutral underline`}
              href={siteConfig.href.register}
            >
              Inscrivez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
