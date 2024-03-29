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
				Die Stadt München fördert netzgekoppelte PV-Anlagen auf Wohngebäuden mit 300 € pro
				kWp Leistung. Es gibt zusätzliche Zuschläge für Kombinationen mit Gründächern,
				Glas-Glas-Modulen, Anlagen auf denkmalgeschützten Häusern und dachintegrierten
				Anlagen. Beratungsleistungen werden ebenfalls bezuschusst, mit einem Höchstbetrag
				von 9.000 € für Gebäude mit drei und mehr Wohneinheiten​
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
