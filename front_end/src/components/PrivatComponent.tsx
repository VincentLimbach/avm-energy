import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';

type PrivatComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const PrivatComponent: React.FC<PrivatComponentProps> = ({ setList, componentList, posIndex }) => {
	const options = ['Einfamilienhaus', 'Mehrfamilienhaus', 'Sonstige'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);
	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Die private Nutzung von Solaranlagen bezieht sich in der Regel auf die Installation
				von Photovoltaiksystemen auf Wohngebäuden. Der Hauptzweck liegt in der
				Eigenversorgung mit Strom, was zur Reduzierung der Energiekosten beiträgt.
				Überschüssiger, nicht sofort verbrauchter Strom kann ins Netz eingespeist werden,
				wofür oft eine Vergütung gezahlt wird. Im Unterschied zu gewerblichen Anlagen, die
				auf größeren Flächen und mit höheren Investitionen für kommerzielle Zwecke genutzt
				werden, sind private Solaranlagen in der Regel kleiner dimensioniert und auf den
				Bedarf des Einzelhaushalts abgestimmt. Neben den finanziellen Vorteilen tragen
				private Solaranlagen auch zum Umweltschutz bei, indem sie zur Reduzierung des
				CO2-Ausstoßes beitragen. Förderprogramme unterstützen häufig die Installation, um
				die Nutzung erneuerbarer Energien attraktiver zu machen.
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

export default PrivatComponent;
