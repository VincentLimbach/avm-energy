import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import RoofDetailsForm from './RoofDetailsForm';
type ÜberdachungComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const ÜberdachungComponent: React.FC<ÜberdachungComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Kaufen', 'Finanzierung', 'Teilfinanzierung', 'Energy Community'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	const handleSetList = (index: number, option: string) => {
		setList(index, option);

		window.open('https://www.avm-energy.de/ECInterface', '_blank');
	};
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Vielseitige Nutzung: Überdachungen, wie Carports oder Terrassendächer, bieten
				zusätzlichen Raum für Solaranlagen. Sie können auch als Ladestationen für
				Elektrofahrzeuge dienen.
				<br />
				Flexibilität: Solche Installationen ermöglichen es, Solarstrom direkt dort zu
				nutzen, wo er benötigt wird, und bieten gleichzeitig Schutz für die darunter
				liegenden Bereiche.
				<br />
				Der Prototyp hört hier auf. Weitere Inhalte finden sie unter der Dachoption.
			</p>
		</div>
	);
};

export default ÜberdachungComponent;
