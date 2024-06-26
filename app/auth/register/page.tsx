'use client'; // Ajoutez cette ligne au début du fichier

import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';

// Définir le type pour les thèmes de couleur
type ColorTheme = 'URANUS' | 'SATURN' | 'JUPITER' | 'VENUS';

// Ajuster l'objet gradients pour utiliser les clés de ColorTheme
const gradients: Record<ColorTheme, string> = {
  URANUS: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  SATURN: 'linear-gradient(45deg, #a18cd1 0%, #fbc2eb 100%)',
  JUPITER: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
  VENUS: 'linear-gradient(45deg, #fddb92 0%, #d1fdff 100%)',
};

const Signup = () => {
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [identity, setGender] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState(gradients.URANUS); // Default theme
  const [colorTheme, setColorTheme] = useState<ColorTheme>('URANUS'); // Default ColorTheme

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

      // Mise à jour du thème après inscription réussie
      setTheme(gradients[colorTheme]);
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

  const handleColorThemeChange = (selectedTheme: ColorTheme) => {
    setTheme(gradients[selectedTheme]);
    setColorTheme(selectedTheme);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8">
        <div className="mb-6 flex flex-col items-center justify-center text-black">
          <div>
            <img
              alt="Logo"
              height={'200rem'}
              src="/images/logo_typographique_black.svg"
              width={'200rem'}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Inscription</p>
            <img
              alt="Underline"
              className="ml-10"
              height={'50rem'}
              src="/images/underline_title.svg"
              width={'80rem'}
            />
          </div>
        </div>

        {error && <p className="mb-4 text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="mb-4">
              <Input
                required
                className="themed-input text-black"
                id="mail"
                label="Email"
                type="mail"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
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
            </div>
          )}

          {step === 2 && (
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
          )}

          {step === 3 && (
            <div className="mb-4">
              <div className="flex space-x-2">
                <select
                  required
                  className="themed-input text-black"
                  id="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option value="">Jour</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  required
                  className="themed-input text-black"
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Mois</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  required
                  className="themed-input text-black"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Année</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mb-4">
              <p>Genre :</p>
              <div>
                <label>
                  <input
                    required
                    className="mr-2"
                    name="identity"
                    type="radio"
                    value="HE"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Il
                </label>
                <label className="ml-4">
                  <input
                    required
                    className="mr-2"
                    name="identity"
                    type="radio"
                    value="SHE"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Elle
                </label>
                <label className="ml-4">
                  <input
                    required
                    className="mr-2"
                    name="identity"
                    type="radio"
                    value="THEY"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Iel
                </label>
              </div>
            </div>
          )}

          <button
            className={`${buttonStyles()} gap-2 rounded-full bg-theme-neutral p-2 pl-10 pr-10 text-sm font-bold text-theme-neutral-invert`}
            type={step < 4 ? 'button' : 'submit'}
            onClick={step < 4 ? handleContinue : undefined}
          >
            {step < 4 ? 'Continuer' : 'Enregistrer'}
            <span className="memicon-arrow" />{' '}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
