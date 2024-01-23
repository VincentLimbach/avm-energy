import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import RoofDetailsForm from './RoofDetailsForm';
type FassadenComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const FassadenComponent: React.FC<FassadenComponentProps> = ({
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
				Gestaltung und Mehrwert: Fassaden bieten einen großen Gestaltungsspielraum und
				können zusätzlichen Schall-, Kälte- und Hitzeschutz bieten. Sie sind auch für
				architektonische Integrationen wie Glas-Glas-Module oder Dünnschicht-PV geeignet.
				<br />
				Effizienz: Fassadenanlagen haben in der Regel niedrigere Energieerträge (bis zu 30 %
				weniger) als Dachanlagen, da sie oft senkrecht positioniert sind. Im Winter können
				sie jedoch effektiver sein, da sie die niedrig stehende Sonne besser einfangen.
				<br />
				Der Prototyp hört hier auf. Weitere Inhalte finden sie unter der Dachoption.
			</p>
		</div>
	);
};

export default FassadenComponent;
