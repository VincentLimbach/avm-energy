import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type VermietetComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const VermietetComponent: React.FC<VermietetComponentProps> = ({
	setList,
	componentList,
	posIndex
}) => {
	const options = ['Private', 'Gewerbliche'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Als Vermieten von Flächen gibt es einige Dinge zu beachten: <br />
				Beim Contracting-Modell im Bereich Solaranlagen verpachtet der Vermieter die
				Dachfläche an ein Energiedienstleistungsunternehmen, das dann für die Finanzierung,
				Installation und den Betrieb der Photovoltaikanlage verantwortlich ist. Der
				Vermieter trägt kein Investitionsrisiko und erhält eine Pacht, verzichtet aber auf
				öffentliche Förderungen wie den Mieterstromzuschlag und die Einspeisevergütung.
				<br />
				Hinsichtlich der Kosten und Umlage von Solaranlagen dürfen Vermieter regelmäßige
				Wartungs- und Prüfungskosten der Anlage auf die Mieter umlegen, während
				Anschaffungs- und Reparaturkosten nicht umlagefähig sind. Diese Kosten müssen als
				&quot;sonstige Betriebskosten&quot; im Mietvertrag aufgeführt werden.
				<br />
				Bei der Installation einer Solaranlage als Modernisierungsmaßnahme sind Mieter
				grundsätzlich zur Duldung verpflichtet, sofern es sich um Maßnahmen zur
				Energieeinsparung handelt. Dies basiert auf § 554 Abs. 2 BGB, der besagt, dass
				Mieter Modernisierungsmaßnahmen dulden müssen, wenn sie den Gebrauchswert der
				Mietsache nachhaltig erhöhen, die allgemeinen Wohnverhältnisse auf Dauer verbessern
				oder Einsparungen von Energie oder Wasser bewirken.
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

export default VermietetComponent;
