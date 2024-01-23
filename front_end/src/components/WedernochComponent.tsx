import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type WederNochComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const WederNochComponent: React.FC<WederNochComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Private', 'Gewerbliche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Als Eigentümer, der die Nutzungsrechte an seine Flächen nicht weitergegeben hat,
				haben Sie die größtmögliche Freiheit bei der Nutzung von Flächen. Wir wollen sie auf
				die folgenden Förderungsmöglichkeit verweisen:
				<br />
				Bundesförderung für effiziente Gebäude (BEG): Dieses Programm unterstützt Maßnahmen
				zur Energieeffizienzverbesserung und zum Einsatz erneuerbarer Energien. Es umfasst
				unter anderem die Förderung von Effizienzmaßnahmen an der Gebäudehülle und
				Anlagentechnik. Die Antragstellung erfolgt beim Bundesamt für Wirtschaft und
				Ausfuhrkontrolle (BAFA) oder der KfW-Bankengruppe, abhängig von der Art der
				Maßnahme.
				<br />
				KfW-Förderprogramm 270: Die KfW-Bank bietet zinsgünstige Kredite für die Anschaffung
				von Photovoltaikanlagen, einschließlich der Kosten für Planung, Projektierung und
				Installation sowie für Batteriespeicher. Die genauen Konditionen und Förderhöhen
				variieren und sollten bei der Hausbank erfragt werden.
				<br />
				Einspeisevergütung gemäß EEG: Das Erneuerbare-Energien-Gesetz (EEG) sichert eine
				Vergütung für den ins öffentliche Netz eingespeisten Solarstrom zu. Die
				Vergütungssätze sind abhängig vom Datum der Inbetriebnahme der Anlage und bleiben
				für 20 Jahre konstant.
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

export default WederNochComponent;
