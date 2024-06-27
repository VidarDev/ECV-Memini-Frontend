'use client'; // Ajoutez cette ligne au début du fichier

import React, {useEffect, useState} from 'react';
import {Input} from '@nextui-org/input';
import {button as buttonStyles} from '@nextui-org/theme';
import {siteConfig} from '@/config/site';
import clsx from 'clsx';
import ThemedRadio from '@/components/ThemedRadio';
import {RadioGroup} from '@nextui-org/radio';
import {useRouter} from 'next/navigation';
import ThemedRadioImages from '@/components/ThemedRadioImage';
import ThemedTextarea from '@/components/ThemedTextarea';
import AddIcons from '@/components/images/AddIcons';
import {useAuth} from '@/context/AuthContext';

const MemoryCreate = () => {

	const router = useRouter();
	const {user, loading} = useAuth();
	const [albums, setAlbums] = useState<Array<any>>([]);

	const [mood, setMood] = useState<string | null>(null);
	const [content, setContent] = useState<string>('');
	const [file, setFile] = useState(null);
	const [selectedAlbum, setSelectedAlbum] = useState<string>('')
	const [error, setError] = useState<string | null>(null);
	const [step, setStep] = useState(1);
	const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

	useEffect(() => {
		const getAlbums = async () => {
			try {
				const response = await fetch(`http://localhost:8080/album/getAlbums?username=${user?.username}`)

				if (response.ok) {
					const data = await response.json();
					setAlbums(data);
				} else {
					const data = await response.json();
					setError(data.errorMessage);
				}
			} catch (e) {
				setError("Erreur lors du contact du serveur")
			}
		}
		getAlbums();
	}, []);

	useEffect(() => {
		if (!loading && !user) {
			router.push(siteConfig.href.auth);
		}
	}, [loading, user, router]);

	const maxSteps: number = 4;

	const handleSubmit = async () => {
		if (step === 1 && mood === null) {
			setError("Vous devez choisir une émotion.");
		} else if (step === 2 && (file === null && content === '')) {
			setError("Veuillez remplir au moins un des deux champs.");
		} else if (step === 3 && selectedAlbum === '') {
			setError("Veuillez selectionner un album.");
		} else if (step == 3) {
			const now = new Date();

			const year = now.getFullYear();
			const month = String(now.getMonth() + 1).padStart(2, '0');
			const day = String(now.getDate()).padStart(2, '0');

			const hours = String(now.getHours()).padStart(2, '0');
			const minutes = String(now.getMinutes()).padStart(2, '0');
			const seconds = String(now.getSeconds()).padStart(2, '0');

			const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

			const formdata = new FormData();
			formdata.append("username", user!.username);
			formdata.append("albumName", selectedAlbum);
			formdata.append("memoryDatetime", formattedDateTime);

			if (content !== '') {
				formdata.append("content", content);
			}

			if (file) {
				formdata.append("multipartFile", file);
				formdata.append("fileName", (file as File).name);
			}

			formdata.append("mood", mood!);

			const options = {
				method: "POST",
				body: formdata
			}
			try {
				const response = await fetch(`http://localhost:8080/memory/save`, options);

				if (response.ok) {
					setStep((prevStep) => prevStep + 1);
					setError(null);
				} else {
					const data = await response.json();
					setError(data.errorMessage);
				}
			} catch (e) {
				setError("Erreur lors du contact du serveur");
			}
		} else if (step === 5) {
			router.push(siteConfig.href.home);
		} else {
			setStep((prevStep) => prevStep + 1);
			setError(null);
		}
	};

	const handlePrevious = () => {
		setStep((prevStep) => prevStep - 1);
		setError(null);
	};

	return (
		<section
			className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 py-6 text-theme-neutral-invert">
			<div className={'flex w-full'}>
				<div
					className={clsx('w-full flex-col gap-8', step > 1 && step < maxSteps ? 'flex' : 'hidden')}
				>
					<button
						className={'w-fit'}
						onClick={() => {
							if (step > 1) handlePrevious();
						}}
					>
						<span className={'memicon-arrow-left text-5xl'} />
					</button>
				</div>
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
								<span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
								<span
									className={'font-raleway text-sm font-normal leading-tight'}>Comment te sens-tu ?</span>
							</div>
							<div className={'flex w-full'}>
								<RadioGroup
									className={
										'flex w-full *:!flex-row *:!flex-wrap *:justify-center *:gap-0 *:gap-y-6'
									}
									label=""
									value={mood}
									onChange={(e) => setMood(e.target.value)}
								>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="happy" className={'border-3'}>
											<img alt={''} className={'h-auto w-full'}
											     src={'/images/emotions/joy.svg'} />
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">joyeux</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="angry" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/anger.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">colère</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="sad" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/sadness.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">tristesse</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="tired" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/fatigue.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">fatigue</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="excited" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/excitement.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">excitation</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="proud" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/pride.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">fierté</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="confident" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/faith.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">confiance</span>
									</div>
									<div
										className={
											'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
										}
									>
										<ThemedRadioImages value="stressed" className={'border-3'}>
											<img
												alt={''}
												className={'h-auto w-full'}
												src={'/images/emotions/stress.svg'}
											/>
										</ThemedRadioImages>
										<span className="text-center font-raleway text-xs font-normal">stress</span>
									</div>
								</RadioGroup>
							</div>
						</div>
					</>
				)}

				{step === 2 && (
					<>
						<div className={'flex w-full flex-col items-center gap-11'}>
							<div
								className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
							>
								<span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
								<span className={'font-raleway text-sm font-normal leading-tight'}>
                                    Décris ton souvenir !
                                </span>
							</div>
							<div className={'flex w-full flex-col items-center gap-3.5'}>
								<ThemedTextarea
									id="description1"
									className={'themed-textarea min-h-14'}
									placeholder={'Ajoute une note si tu le souhaites (255 caractères max)'}
									value={content}
									onChange={(e) => setContent(e.target.value)}
								/>
								<Input
									id="media1"
									className={'themed-input themed-textarea w-full'}
									placeholder={'Title'}
									type="file"
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>
						</div>
					</>
				)}

				{step === 3 && (
					<>
						<div className={'flex w-full flex-col items-center gap-11'}>
							<div className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}>
								<span className={'font-pangaia text-3xl font-bold leading-10'}>Ma pensine</span>
								<span className={'font-raleway text-sm font-normal leading-tight'}>Qu’est ce que tu veux ajouter ?</span>
							</div>
							<div className={'flex w-full flex-col items-center gap-3.5'}>
								<button
									className={`${buttonStyles()} min-h-12 !w-full justify-between gap-2 !rounded-full border border-theme-neutral-invert bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
									type={'button'}
								>
									Créer un album
									<AddIcons
										className={'h-[24px] w-[24px]'}
										startColor={'var(--theme-primary)'}
										endColor={'var(--theme-secondary)'}
										centerColor={'var(--theme-neutral-invert)'}
									></AddIcons>
								</button>
								<RadioGroup className={'flex w-full flex-col *:gap-3.5'} label="" value={selectedAlbum}
								            onChange={(e) => setSelectedAlbum(e.target.value)}>
									{
										albums.map(album => <ThemedRadio
											value={album.albumName}>{album.albumName}</ThemedRadio>)
									}
								</RadioGroup>
							</div>
						</div>
					</>
				)}

				{step === 4 && (
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
                                    Ton souvenir a bien été ajouté !
                                </span>
							</div>
						</div>
					</>
				)}
			</form>
			<button
				className={`${buttonStyles()} min-h-12 w-full gap-2 !rounded-full bg-theme-primary px-6 font-raleway text-sm font-bold text-theme-neutral`}
				type={step < maxSteps ? 'button' : 'submit'}
				onClick={handleSubmit}
			>
				{loginStatus === 'loading' ? 'Se connecte à...' : 'Se connecter'}
				<span className={'memicon-arrow'} />{' '}
			</button>
		</section>
	);
};

export default MemoryCreate;
