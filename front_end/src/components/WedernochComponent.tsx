import React from 'react';
import ToggleButtonBar from './ToggleButtonBar'; 
import GoldenBox from './GoldenBox';

type WederNochComponentProps = {
  setList: (index: number, option: string) => void;
  componentList: Array<string | null>;
  posIndex: number;
};

const WederNochComponent: React.FC<WederNochComponentProps> = ({ setList, componentList, posIndex }) => {
  const options = ["Private", "Gewerbliche"];
  const activeIndex = options.indexOf(componentList[posIndex] as string);
  
  return (
    <div id={`component-${posIndex}`}>
      <p className='textBox'>Als Eigentümer, der die Nutzungsrechte an seine Flächen nicht weitergegeben hat, haben Sie die größtmögliche Freiheit bei der Nutzung von Flächen.</p>
      <GoldenBox text = "Für welche Zwecke soll die Anlage genutzt werden?"></GoldenBox>
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
