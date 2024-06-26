'use client'; // Ajoutez cette ligne au début du fichier

import { useState, useEffect } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import '../../styles/globals.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [initialBackgroundTheme, setInitialBackgroundTheme] = useState<string>(
    'linear-gradient(to bottom right, #ffffff, #f1f1f1)',
  );

  useEffect(() => {
    // Fetch initial background theme or set a default
    // Replace with actual fetch logic if needed
    setInitialBackgroundTheme('linear-gradient(to bottom right, #ffffff, #f1f1f1)');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginStatus('loading');

    try {
      const response = await fetch('http://192.168.1.101:8080/login', {
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

      // Reset background theme to initial state
      setInitialBackgroundTheme('linear-gradient(to bottom right, #ffffff, #f1f1f1)');
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
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: initialBackgroundTheme }}
    >
      <div className="p-8">
        <div className="mb-6 flex flex-col items-center justify-center text-black">
          <div>
            <img
              alt="Description de l'image"
              height={'200rem'}
              src="/images/logo_typographique_black.svg"
              width={'200rem'}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Se connecter</p>
            <img
              alt="Description de l'image"
              className="ml-10"
              height={'50rem'}
              src="/images/underline_title.svg"
              width={'80rem'}
            />
          </div>
        </div>

        {error && <p className="mb-4 text-red-500">{error}</p>}
        {loginStatus === 'success' && <p className="mb-4 text-green-500">Login successful!</p>}
        {loginStatus === 'error' && (
          <p className="mb-4 text-red-500">An error occurred. Please try again.</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              required
              className="themed-input text-black"
              id="username"
              label="Pseudo"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Input
              required
              className="themed-input text-black"
              id="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={`${buttonStyles()} gap-2 rounded-full bg-theme-neutral p-2 pl-10 pr-10 text-sm font-bold text-theme-neutral-invert`}
            type="submit"
          >
            {loginStatus === 'loading' ? 'Se connecte à...' : 'Se connecter'}
            <span className="memicon-arrow" />{' '}
          </button>
          <div className="mt-6 text-black">
            <p> Vous débutez sur Memini? </p>
            <p className="underline">
              {' '}
              <a href="/signup"> Inscrivez-vous </a>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
