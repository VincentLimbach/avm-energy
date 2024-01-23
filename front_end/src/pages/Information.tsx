import React, { useState } from 'react';
import ToggleButtonBar from './../components/ToggleButtonBar';
import EigenheimComponent from './../components/EigenheimComponent';
import EigentümerComponent from './../components/EigentümerComponent';
import GewerblichComponent from './../components/GewerblichComponent';
import { useSidebar } from './../components/ui/SidebarContext';
import MieterComponent from 'components/MieterComponent';
import GoldenBox from 'components/GoldenBox';
import PächterComponent from 'components/PächterComponent';
import WederNochComponent from 'components/WedernochComponent';
import MehrfamilienComponent from 'components/MehrfamilienComponent';
import DachComponent from 'components/DachComponent';
import EinfamilienComponent from 'components/EinfamilienComponent';
import FirmengebaudeComponent from 'components/Firmengebäude';
import PrivatComponent from 'components/PrivatComponent';
import SonstigeBuildingComponent from 'components/SonstigeBuildingComponent';
import VermietetComponent from 'components/VermietetComponent';
import VerpachtetComponent from 'components/VerpachtetComponent';
import FassadenComponent from 'components/FassadenComponent';
import FreiflächenComponent from 'components/FreiflächenComponent';
import ÜberdachungComponent from 'components/ÜberdachungComponent';

const HomePage: React.FC = () => {
	const [componentList, setComponentList] = useState<Array<string | null>>(
		new Array(10).fill(null)
	);
	const { insertSidebarItem } = useSidebar();

	const handleSetList = (posIndex: number, option: string): void => {
		const updatedList = componentList.map((item, index) =>
			index === posIndex ? option : index > posIndex ? null : item
		);
		setComponentList(updatedList);
		console.log(updatedList);

		insertSidebarItem({ name: option, path: `#component-${posIndex}` }, posIndex);
	};

	const renderComponent = (componentName: string | null, posIndex: number) => {
		switch (componentName) {
			case 'Mieter':
				return (
					<MieterComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Pächter':
				return (
					<PächterComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Eigentümer':
				return (
					<EigentümerComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Eigenheim':
				return (
					<EigenheimComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Gewerbliche':
				return (
					<GewerblichComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Weder vermietet noch verpachtet':
				return (
					<WederNochComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Mehrfamilienhaus':
				return (
					<MehrfamilienComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Dach':
				return (
					<DachComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Einfamilienhaus':
				return (
					<EinfamilienComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Firmengebäude':
				return (
					<FirmengebaudeComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Private':
				return (
					<PrivatComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Sonstige Gebäude':
				return (
					<SonstigeBuildingComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Vermietet':
				return (
					<VermietetComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Verpachtet':
				return (
					<VerpachtetComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Freifläche':
				return (
					<FreiflächenComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Fassadenbauteile':
				return (
					<FassadenComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			case 'Überdachung':
				return (
					<ÜberdachungComponent
						setList={handleSetList}
						componentList={componentList}
						posIndex={posIndex}
					/>
				);
			default:
				return null;
		}
	};
	console.log(componentList);
	return (
		<div className="base_page flex flex-col justify-center items-center">
			<p className="textBox" id={`component-0`}>
				Willkommen beim Abschnitt <strong>Hintergrund und Finanzierung</strong> auf
				SolarSimplify - Ihrer komfortablen Lösung für die Integration von Solarenergie in
				Ihren Alltag! Hier finden sie alle rechtlichen, finanziellen und technischen
				Informationen zu ihrem neuen Projekt.
				<br />
				<br />
				Im Abschnitt <strong>Hintergrund und Finanzierung</strong> konzentrieren wir uns
				darauf, Ihnen fundierte, lokal relevante Informationen zu bieten, die auf Ihren
				individuellen Eingaben basieren. Sobald Sie beispielsweise Ihr Besitzverhältnis zur
				relevanten Fläche angeben, generiert unser System die entsprechenden Informationen.
				Wir stellen Ihnen hierbei rechtlich geprüfte Erklärungen der gesetzlichen
				Bestimmungen für Solarenergie in Deutschland und München zur Verfügung. Zusätzlich
				behandeln wir sowohl die Ihnen zur Verfügung stehenden technischen als auch
				finanziellen Optionen, wodurch SolarSimplify sämtliche relevanten Aspekte abdeckt.
				Hiermit zielen wir insbesondere darauf ab, die Komplexität des Solarstrommarktes zu
				entmystifizieren und Ihnen einen klaren Einblick zu gewähren. Zusätzlich errechnen
				wir schnell und diskret eine realistische Kostenschätzung anhand verifizierter
				lokaler Preise verschiedener Anbieter.
				<br />
			</p>
			<GoldenBox text="Was ist Ihr Besitzverhältnis zu den Fächen?" />
			<ToggleButtonBar
				options={['Mieter', 'Pächter', 'Eigentümer']}
				setList={handleSetList}
				activeIndex={
					componentList[0]
						? componentList[0] == 'Mieter'
							? 0
							: componentList[0] == 'Pächter'
							? 1
							: 2
						: -1
				}
				posIndex={0}
			/>

			{componentList.map((component, index) =>
				component ? renderComponent(component, index + 1) : null
			)}
		</div>
	);
};

export default HomePage;
