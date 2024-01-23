import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';

type EigenheimComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const EigenheimComponent: React.FC<EigenheimComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Einfamilienhaus', 'Mehrfamilienhaus', 'Sonstiges'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Eigenheim: Ein Gebäude, das eine Person oder Familie als Eigentum besitzt und darin
				wohnt.
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

export default EigenheimComponent;
