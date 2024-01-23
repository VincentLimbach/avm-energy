import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type MieterComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const MieterComponent: React.FC<MieterComponentProps> = ({ setList, componentList, posIndex }) => {
	const options = ['Private', 'Gewerbliche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Ein Mieter ist eine Person oder Organisation, die eine Immobilie (wie eine Wohnung,
				ein Haus oder gewerbliche Räumlichkeiten) für einen vereinbarten Zeitraum gegen eine
				Mietzahlung nutzt. Der Mieter erhält das Recht, die Immobilie zu bewohnen oder zu
				nutzen, besitzt aber keine Eigentumsrechte daran. Der Mietvertrag legt die
				Bedingungen der Nutzung, die Höhe der Miete und die Dauer des Mietverhältnisses
				fest. Mieter sind in der Regel für die Instandhaltung des Mietobjekts im Rahmen der
				vertraglichen Vereinbarungen verantwortlich, während größere Reparaturen und
				Instandhaltungsarbeiten oft in der Verantwortung des Eigentümers liegen.
			</p>
			<GoldenBox text="Für welche Zwecke soll die Anlage genutzt werden?" />
			<ToggleButtonBar
				options={options}
				setList={setList}
				activeIndex={activeIndex}
				posIndex={posIndex}
			/>
		</div>
	);
};

export default MieterComponent;
