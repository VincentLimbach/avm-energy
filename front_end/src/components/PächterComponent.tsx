import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type PächterComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const PächterComponent: React.FC<PächterComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Private', 'Gewerbliche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Ein Pächter ist eine Person oder Organisation, die das Recht erwirbt, ein Stück
				Land, eine Immobilie oder ein Unternehmen für einen bestimmten Zeitraum zu nutzen
				und zu bewirtschaften. Dies geschieht im Austausch für eine Zahlung, die als Pacht
				bezeichnet wird. Im Gegensatz zu einem Mieter, der hauptsächlich die Nutzung von
				Wohnraum oder Gewerberäumen mietet, bezieht sich das Pachten oft auf
				landwirtschaftliche Flächen, Wälder, Gewässer oder Geschäftsbetriebe. Dabei kann der
				Pächter das Land oder die Einrichtungen nicht nur nutzen, sondern auch Erträge
				daraus erzielen.
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

export default PächterComponent;
