'use client'; // Ajoutez cette ligne au début du fichier

import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import { useTheme } from 'next-themes';
import FiveIcons from '@/components/images/fiveIcons';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import { Progress } from '@nextui-org/progress';
import clsx from 'clsx';
import TwoIcons from '@/components/images/twoIcons';
import ThreeIcons from '@/components/images/threeIcons';
import ThemedRadio from '@/components/ThemedRadio';
import { Select, SelectItem } from '@nextui-org/select';
import { Avatar } from '@nextui-org/avatar';
import FourIcons from '@/components/images/fourIcons';
import { RadioGroup } from '@nextui-org/radio';

const Signup = () => {
  const { theme, setTheme } = useTheme();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [identity, setGender] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const maxSteps: number = 4;
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step < 4) {
      if (!validateStep()) {
        setError('Tous les champs doivent être remplis avant de continuer.');

        return;
      }
      handleContinue();

      return;
    }

    if (!validateStep()) {
      setError('Tous les champs doivent être remplis avant de soumettre.');

      return;
    }

    const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    try {
      const response = await fetch(`${process.env.BACK_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ mail, password, username, birthDate, identity, colorTheme }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || 'Signup failed');
      }

      // Signup successful
      console.log('Signup successful');
    } catch (err) {
      console.error('Signup error:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    }
  };

  const handleContinue = () => {
    // Increment step to show next set of fields
    setStep((prevStep) => prevStep + 1);
    setError(null); // Clear error message when moving to next step
  };

  const handlePrevious = () => {
    // Increment step to show next set of fields
    setStep((prevStep) => prevStep - 1);
    setError(null); // Clear error message when moving to next step
  };

  const validateStep = (): boolean => {
    if (step === 1 && (!mail || !password)) {
      return false;
    }
    if (step === 2 && !username) {
      return false;
    }
    if (step === 3 && (!day || !month || !year)) {
      return false;
    }
    if (step === 4 && !identity) {
      return false;
    }

    return true;
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between px-4 py-6">
      <div className={'flex w-full'}>
        <div className={clsx('w-full flex-col gap-8', step > 1 ? 'flex' : 'hidden')}>
          <Progress
            aria-label="Downloading..."
            className="themed-progress w-full"
            size="md"
            value={(100 / 4) * step}
          />
          <button
            className={'w-fit'}
            onClick={() => {
              if (step > 1) handlePrevious();
            }}
          >
            <span className={'memicon-arrow-left text-5xl'} />
          </button>
          {error && <p className="mb-4 text-theme-error">{error}</p>}
        </div>
      </div>
      <form className={'flex w-full flex-col items-center gap-16'}>
        {step === 1 && (
          <>
            <span className={'memicon-logo text-[206px]'}></span>
            <div className={'flex w-full flex-col items-center gap-6'}>
              <div className={'relative w-fit pb-7'}>
                <FiveIcons
                  className={'absolute -right-2 bottom-2 -rotate-[2.4deg]'}
                  startColor={'var(--theme-primary)'}
                  endColor={'var(--theme-secondary)'}
                />
                <span className={'font-pangaia text-2xl font-bold'}>Bienvenue sur Memini</span>
              </div>
              <span className={'text-center font-raleway text-sm font-normal'}>
                Vous avez déjà un compte ?{' '}
                <Link
                  className={`justify-center text-center font-raleway text-sm font-bold text-theme-neutral underline`}
                  href={siteConfig.href.login}
                >
                  Se connecter
                </Link>
              </span>
              <Input
                required
                className="themed-input text-black"
                id="username"
                label="Mail"
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
              <Input
                required
                className="themed-input text-black"
                id="confirm-password"
                label="Confirmer le mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={'flex w-full flex-col items-center gap-6'}>
              <div className={'flex w-full'}>
                <div className={'relative flex w-fit'}>
                  {/*<TwoIcons*/}
                  {/*  className={'absolute -right-0 -top-1 h-[24px] w-[27px]'}*/}
                  {/*  startColor={'var(--theme-primary)'}*/}
                  {/*  endColor={'var(--theme-secondary)'}*/}
                  {/*/>*/}
                  <span className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
                    Choisis un nom qui te ressemble
                  </span>
                </div>
              </div>
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
          </>
        )}

        {step === 3 && (
          <>
            <div className={'flex w-full flex-col items-center gap-6'}>
              <div className={'flex w-full'}>
                <div className={'relative flex w-fit'}>
                  {/*<ThreeIcons*/}
                  {/*  className={'absolute -bottom-3 -right-4 h-[20px] w-[54px]'}*/}
                  {/*  startColor={'var(--theme-primary)'}*/}
                  {/*  endColor={'var(--theme-secondary)'}*/}
                  {/*/>*/}
                  <span className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
                    Pour te recommander au mieux
                  </span>
                </div>
              </div>
              <div className={'flex w-full items-center gap-2'}>
                <Select
                  isRequired
                  className="themed-select no-arrow max-w-24"
                  variant={'bordered'}
                  id="day"
                  label={'Jour'}
                  onChange={(e) => setDay(e.target.value)}
                >
                  {days.map((key) => (
                    <SelectItem key={key}>{key}</SelectItem>
                  ))}
                </Select>
                <div className={'relative flex h-full w-4 items-center justify-center'}>
                  <div className="absolute h-0.5 w-6 origin-center rotate-[105deg] border border-theme-neutral"></div>
                </div>
                <Select
                  isRequired
                  className="themed-select no-arrow max-w-24"
                  variant={'bordered'}
                  id="month"
                  label={'Mois'}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {months.map((m) => (
                    <SelectItem key={m}>{m}</SelectItem>
                  ))}
                </Select>
                <div className={'relative flex h-full w-4 items-center justify-center'}>
                  <div className="absolute h-0.5 w-6 origin-center rotate-[105deg] border border-theme-neutral"></div>
                </div>
                <Select
                  isRequired
                  className="themed-select no-arrow max-w-24"
                  variant={'bordered'}
                  id="year"
                  label={'Année'}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {years.map((y) => (
                    <SelectItem key={y}>{y}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className={'flex w-full flex-col items-center gap-6'}>
              <div className={'flex w-full'}>
                <div className={'relative flex w-fit'}>
                  {/*<FourIcons*/}
                  {/*  className={'absolute bottom-0.5 right-2 h-[28px] w-[18px]'}*/}
                  {/*  startColor={'var(--theme-primary)'}*/}
                  {/*  endColor={'var(--theme-secondary)'}*/}
                  {/*/>*/}
                  <span className={'w-fit max-w-72 font-pangaia text-3xl font-bold leading-10'}>
                    Dans quel pronom te reconnais-tu ?
                  </span>
                </div>
              </div>
              <RadioGroup className={'flex w-full flex-col gap-6'} label="">
                <ThemedRadio value="HE">il</ThemedRadio>
                <ThemedRadio value="SHE">elle</ThemedRadio>
                <ThemedRadio value="THEY">iel</ThemedRadio>
              </RadioGroup>
            </div>
          </>
        )}
      </form>
      <button
        className={`${buttonStyles()} min-h-10 w-full gap-2 !rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
        type={step < maxSteps ? 'button' : 'submit'}
        onClick={() => {
          if (step < maxSteps) handleContinue();
        }}
      >
        {/*{loginStatus === 'loading' ? 'Se connecte à...' : 'Se connecter'}*/}
        Continuer
        <span className={'memicon-arrow'} />{' '}
      </button>
    </section>
  );
};

export default Signup;
