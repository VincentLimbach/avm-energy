import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import RoofDetailsForm from './RoofDetailsForm';
type DachComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const DachComponent: React.FC<DachComponentProps> = ({ setList, componentList, posIndex }) => {
	const options = ['Kaufen', 'Finanzierung', 'Teilfinanzierung', 'Energy Community'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	const handleSetList = (index: number, option: string) => {
		setList(index, option);

		window.open('https://www.avm-energy.de/ECInterface', '_blank');
	};
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Anpassungsfähigkeit: Fast alle Dachtypen sind für Photovoltaikanlagen geeignet,
				einschließlich Flach- und Steildächern. Wichtige Faktoren sind die Tragfähigkeit,
				Ausrichtung, Neigung und Schattenwurf.
				<br />
				Ausrichtung und Neigung: Idealerweise sollten Dächer nach Süden ausgerichtet sein
				und eine Neigung von etwa 30 bis 35 Grad haben, um den maximalen
				Sonneneinstrahlungswinkel zu nutzen.
				<br />
				Eine konkrete Kosteneinschätzung erhalten sie nach Ausfüllen des folgenden
				Formulars.
			</p>
			<RoofDetailsForm></RoofDetailsForm>
			<ToggleButtonBar
				options={options}
				setList={handleSetList}
				activeIndex={activeIndex}
				posIndex={posIndex}
			/>
		</div>
	);
};

export default DachComponent;
