'use client'; // Ajoutez cette ligne au début du fichier

import React, {useEffect, useState} from 'react';
import {Input} from '@nextui-org/input';
import {button as buttonStyles} from '@nextui-org/theme';
import {useTheme} from 'next-themes';
import FiveIcons from '@/components/images/fiveIcons';
import {Link} from '@nextui-org/link';
import {siteConfig} from '@/config/site';
import {Progress} from '@nextui-org/progress';
import clsx from 'clsx';
import ThemedRadio from '@/components/ThemedRadio';
import {RadioGroup} from '@nextui-org/radio';
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/AuthContext";

const Signup = () => {
	const {theme, setTheme} = useTheme();
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');

	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [username, setUsername] = useState('');

	const [identity, setGender] = useState('');

	const [disableButton, setDisableButton] = useState<boolean>(false);

	const [error, setError] = useState<string | null>(null);
	const [mailError, setMailError] = useState<string | null>(null);
	const [usernameError, setUsernameError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);
	const [step, setStep] = useState(1);
	const maxSteps: number = 4;

	const {login} = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	}, [theme]);

	useEffect(() => {
		setDisableButton(error !== null || mailError !== null || passwordError !== null || usernameError !== null);
	}, [error, mailError, usernameError, passwordError]);

	const handleMailIsFree = async () => {
		try {
			const response = await fetch(`http://localhost:8080/isMailFree?mail=${mail}`);

			if (response.ok) {
				setMailError(null);
			} else {
				const data = await response.json();
				setMailError(data.errorMessage);
			}
		} catch (e) {
			setMailError("Erreur lors du contact du serveur");
		}
		setError(null);
	}

	const handleUsernameIsFree = async () => {
		try {
			const response = await fetch(`http://localhost:8080/isUsernameFree?username=${username}`);

			if (response.ok) {
				setUsernameError(null);
			} else {
				const data = await response.json();
				setUsernameError(data.errorMessage);
			}
		} catch (e) {
			setMailError("Erreur lors du contact du serveur");
		}
		setError(null);
	}

	const checkPasswordsAreTheSame = () => {
		if (password !== confirmPassword) {
			setPasswordError("Les mots de passe doivent être identiques");
		} else {
			setPasswordError(null);
		}

		setError(null);
	}

	const handleSubmit = async () => {
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

		const birthDate = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

		try {
			const response = await fetch(`http://localhost:8080/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
				body: JSON.stringify({mail, password, username, birthDate, identity, colorTheme: 'saturn'}),
			});

			if (!response.ok) {
				const errorData = await response.json();
				setError(errorData.errorMessage);
			} else {
				const data = await response.json();
				login(username);
				router.push(siteConfig.href.home);
			}

		} catch (err) {
			console.error('Signup error:', err);
			setError("Erreur lors du contact du serveur");
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
		if (step === 1 && (mail == '' || password == '' || error !== null)) {
			return false;
		}
		if (step === 2 && username == '' || error !== null) {
			return false;
		}
		if (step === 3 && (day == '' || month == '' || year == '')) {
			return false;
		}
		if (step === 4 && identity == '') {
			return false;
		}

		return true;
	};

	const days = Array.from({length: 31}, (_, i) => i + 1);
	const months = Array.from({length: 12}, (_, i) => i + 1);
	const years = Array.from({length: 100}, (_, i) => new Date().getFullYear() - i);

	return (
		<section
			className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between px-4 py-6">
			<div className={'flex flex-col w-full'}>
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
				</div>
				{error && <p className="mb-1 text-theme-error">{error}</p>}
				{mailError && <p className="mb-1 text-theme-error">{mailError}</p>}
				{usernameError && <p className="mb-1 text-theme-error">{usernameError}</p>}
				{passwordError && <p className="mb-1 text-theme-error">{passwordError}</p>}
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
								value={mail}
								onChange={(e) => setMail(e.target.value)}
								onBlur={handleMailIsFree}
							/>
							<Input
								required
								className="themed-input text-black"
								id="password"
								label="Mot de passe"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onBlur={checkPasswordsAreTheSame}
							/>
							<Input
								required
								className="themed-input text-black"
								id="confirm-password"
								label="Confirmer le mot de passe"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								onBlur={checkPasswordsAreTheSame}
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
								onBlur={handleUsernameIsFree}
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
                    Quelle est ta date de naissance ?
                  </span>
								</div>
							</div>
							<div className={'flex w-full items-center gap-2'}>
								<Input className={'themed-input'} label="Jour" type="number" value={day} onChange={(e) => {setError(null); setDay(e.target.value)}} />
								<div className={'relative flex h-full w-4 items-center justify-center'}>
									<div
										className="absolute h-0.5 w-6 origin-center rotate-[105deg] border border-theme-neutral"></div>
								</div>
								<Input className={'themed-input'} label="Mois" type="number" value={month} onChange={(e) => {
									setError(null);
									setMonth(e.target.value)
								}} />
								<div className={'relative flex h-full w-4 items-center justify-center'}>
									<div
										className="absolute h-0.5 w-6 origin-center rotate-[105deg] border border-theme-neutral"></div>
								</div>
								<Input className={'themed-input'} label="Année" type="number" value={year} onChange={(e) => {
									setError(null);
									setYear(e.target.value)
								}} />
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
							<RadioGroup className={'flex w-full flex-col gap-6'} label="" onChange={(e) => {setError(null); setGender(e.target.value)}}>
								<ThemedRadio value="HE">il</ThemedRadio>
								<ThemedRadio value="SHE">elle</ThemedRadio>
								<ThemedRadio value="THEY">iel</ThemedRadio>
							</RadioGroup>
						</div>
					</>
				)}
			</form>
			<button
				className={clsx(buttonStyles(), `min-h-12 w-full gap-2 !rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`, disableButton ? '!text-theme-disabled !bg-theme-disabled' : '')}
				type={step < maxSteps ? 'button' : 'submit'}
				onClick={handleSubmit} disabled={disableButton}
			>
				{step < maxSteps ? 'Continuer' : 'Créer mon compte'}
				<span className={'memicon-arrow'} />{' '}
			</button>
		</section>
	);
};

export default Signup;
