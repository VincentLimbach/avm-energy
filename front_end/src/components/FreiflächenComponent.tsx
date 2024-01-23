import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import RoofDetailsForm from './RoofDetailsForm';
type FreiflächenComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const FreiflächenComponent: React.FC<FreiflächenComponentProps> = ({
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
				Größere Anlagen möglich: Freiflächenanlagen erlauben eine freie Wahl bei Neigung und
				Ausrichtung, was zu effizienteren Großanlagen führt.
				<br />
				Umfangreiche Genehmigungsverfahren: Allerdings erfordern sie umfangreichere
				Genehmigungsverfahren und haben einen hohen Flächenbedarf. Besondere Varianten wie
				Agri-PV oder Parkplatz-PV ermöglichen eine doppelte Nutzung der Fläche
				<br />
				Der Prototyp hört hier auf. Weitere Inhalte finden sie unter der Dachoption.
			</p>
		</div>
	);
};

export default FreiflächenComponent;
