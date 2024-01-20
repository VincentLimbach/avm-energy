import React from 'react';
import ToggleButtonBar from './ToggleButtonBar'; // Update the import path

type GewerblichComponentProps = {
  setList: (index: number, option: string) => void;
  componentList: Array<string | null>;
  posIndex: number;
};

const GewerblichComponent: React.FC<GewerblichComponentProps> = ({ setList, componentList, posIndex }) => {
  const options = ['Ein- oder Zweifamilienhaus', 'Mehrfamilienhaus', 'Firmengebäude', 'Sonstige'];
  const activeIndex = options.indexOf(componentList[posIndex] as string);
  return (
    <div id={`component-${posIndex}`}>
      <p className='textBox'>Gewerbliche Nutzung beschreibt die Installation von Solaranlagen auf Gebäuden oder Grundstücken, die gewerblichen Zwecken dienen, wie Fabriken, Bürogebäuden, landwirtschaftlichen Betrieben oder auch auf Freiflächen, die speziell für die Energieerzeugung genutzt werden. Hier steht oft die Erzielung eines wirtschaftlichen Nutzens im Vordergrund, sei es durch die Senkung der Betriebskosten durch Eigenverbrauch der erzeugten Energie oder durch den Verkauf der überschüssigen Energie. Gewerbliche Solaranlagen können aufgrund der größeren zur Verfügung stehenden Flächen und der höheren Investitionskapazitäten oft größer dimensioniert werden als private Solaranlagen.</p>
      <ToggleButtonBar
        options={options}
        setList={setList}
        activeIndex={activeIndex}
        posIndex={posIndex}
      />
    </div>
  );
};

export default GewerblichComponent;
