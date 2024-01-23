import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'styles/global.css';
import type { AppProps } from 'next/app';
import { DefaultLayout } from 'components/ui/layouts/Default';
import 'devextreme/dist/css/dx.light.css';

const App = ({ Component, pageProps }: AppProps) => {
	const [landingPageShown, setLandingPageShown] = useState(false);

	useEffect(() => {
		const hasVisited = localStorage.getItem('hasVisited');
		if (!hasVisited) {
			setLandingPageShown(true);
		}
	}, []);

	const handleLandingPageClick = () => {
		localStorage.setItem('hasVisited', 'true');
		setLandingPageShown(false);
	};

	return landingPageShown ? (
		<div
			onClick={handleLandingPageClick}
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 1000,
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Image src="/LandingPage.jpeg" alt="Landing Page" layout="fill" objectFit="cover" />
		</div>
	) : (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	);
};

export default App;
