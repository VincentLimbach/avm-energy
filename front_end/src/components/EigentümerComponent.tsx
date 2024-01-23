import React from 'react';
import ToggleButtonBar from './ToggleButtonBar';
import GoldenBox from './GoldenBox';

type MieterComponentProps = {
	setList: (index: number, option: string) => void;
	componentList: Array<string | null>;
	posIndex: number;
};

const MieterComponent: React.FC<MieterComponentProps> = ({ setList, componentList, posIndex }) => {
	const options = ['Vermietet', 'Verpachtet', 'Weder vermietet noch verpachtet'];
	const activeIndex = options.indexOf(componentList[posIndex] as string);

	return (
		<div id={`component-${posIndex}`}>
			<p className="textBox">
				Ein Eigentümer hingegen ist die Person oder Organisation, die das rechtliche
				Eigentum an einer Immobilie besitzt. Der Eigentümer hat das Recht, die Immobilie
				nach Belieben zu nutzen, zu verkaufen, zu vermieten oder zu vererben. Im Gegensatz
				zum Mieter trägt der Eigentümer die volle Verantwortung für alle Aspekte der
				Immobilie, einschließlich Instandhaltung, Reparaturen und die Bezahlung von Steuern
				und anderen Gebühren, die mit dem Eigentum verbunden sind. Der Eigentümer profitiert
				auch von Wertsteigerungen der Immobilie. Eigentum bietet somit eine größere Freiheit
				in der Nutzung und Gestaltung der Immobilie, bringt aber auch mehr Verantwortung und
				finanzielle Verpflichtungen mit sich.
			</p>
			<GoldenBox text="Ich habe meine Flächen..." />
			<ToggleButtonBar
				options={options}
				setList={setList}
				activeIndex={activeIndex}
				posIndex={posIndex}
			/>
		</div>
	);
};

export default MieterComponent;
