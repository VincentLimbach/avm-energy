import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';

type MehrfamilienComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const MehrfamilienComponent: React.FC<MehrfamilienComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Dach', 'Fassadenbauteile', 'Überdachung', 'Freifläche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Förderprogramm Energieeinsparung München: Es unterstützt den Ausbau von
				Photovoltaikanlagen mit einer Förderung von 200 € je kWp für die ersten 10 kWp und
				100 € für jedes weitere kWp bis 30 kWp. Fassadenanlagen erhalten 200 € je kWp. Ein
				Bonuszuschlag von 3.000 € wird für Mieterstromkonzepte und denkmalgeschützte Gebäude
				gewährt. Die Anlage darf größer gebaut werden, aber nur die ersten 30 kWp sind
				förderfähig.
			</p>
			<ToggleButtonBar
				options={options}
				setList={setList}
				activeIndex={activeIndex}
				posIndex={posIndex}
			/>
		</div>
	);
};

export default MehrfamilienComponent;
