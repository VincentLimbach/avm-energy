import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
type SonstigeBuildingComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const SonstigeBuildingComponent: React.FC<SonstigeBuildingComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Dach', 'Fassadenbauteile', 'Überdachung', 'Freifläche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Mehrfamilienhäuser sind Wohngebäude, die so konzipiert sind, dass sie mehreren
				Familien oder Haushalten gleichzeitig als Wohnraum dienen. Sie bestehen
				typischerweise aus mehreren Wohneinheiten, die sich in einem einzigen Gebäude
				befinden. Jede Wohneinheit ist in der Regel eine selbstständige Wohnung, die über
				eigene notwendige Einrichtungen wie Küche, Bad und Schlafbereiche verfügt.
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

export default SonstigeBuildingComponent;
