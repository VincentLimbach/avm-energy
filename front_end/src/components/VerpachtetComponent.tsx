import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type VerpachtetComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const VerpachtetComponent: React.FC<VerpachtetComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Private', 'Gewerbliche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Wenn Sie Solaranlagen auf verpachteten Flächen in München installieren möchten,
				sollten Sie zwei Hauptaspekte berücksichtigen:
				<br />
				Vertragliche Vereinbarungen: Überprüfen Sie die Pachtverträge bezüglich Bestimmungen
				zur Installation von Solaranlagen. Eine Zustimmung des Pächters ist meist
				erforderlich, insbesondere wenn die Installation einen Eingriff in die Bausubstanz
				darstellt oder die Nutzung des Grundstücks beeinträchtigt.
				<br />
				Duldungspflicht des Pächters: Gemäß dem § 11a EEG-E 2023 könnte eine gesetzliche
				Duldungspflicht für Pächter bestehen, besonders wenn es um Netzanschlussleitungen
				für EE-Anlagen geht. Diese Duldungspflicht gilt, wenn die Installation als Maßnahme
				zur Energieeinsparung eingestuft wird und steht im Einklang mit dem Grundgesetz. Sie
				sollten jedoch beachten, dass die spezifischen Bedingungen Ihres Pachtvertrags
				ausschlaggebend sein können.
			</p>
			<GoldenBox text="Für welche Zwecke soll die Anlage genutzt werden?"></GoldenBox>
			<ToggleButtonBar
				options={options}
				setList={setList}
				activeIndex={activeIndex}
				posIndex={posIndex}
			/>
		</div>
	);
};

export default VerpachtetComponent;
