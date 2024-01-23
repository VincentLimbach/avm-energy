import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';

type FirmengebäudeComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const FirmengebäudeComponent: React.FC<FirmengebäudeComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Dach', 'Fassadenbauteile', 'Überdachung', 'Freifläche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Für neue Nichtwohngebäude in München besteht seit Januar 2023 eine
				Photovoltaik-Pflicht, jedoch ohne kommunale Förderung. Unternehmen, die einen neuen
				Firmensitz bauen, müssen eine Solaranlage installieren, erhalten aber keine
				Förderung der Stadt München für diese Anlagen. Das bedeutet, dass sie im Falle eines
				Neubaus sogar verpflichtet sind, eine Solaranlage zu installieren.
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

export default FirmengebäudeComponent;
