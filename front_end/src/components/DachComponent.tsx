import React from 'react';
import ToggleButtonBar from './ToggleButtonBar'; // Update the import path
import RoofDetailsForm from './RoofDetailsForm'
type DachComponentProps = {
  setList: (index: number, option: string) => void;
  componentList: Array<string | null>;
  posIndex: number;
};



const DachComponent: React.FC<DachComponentProps> = ({ setList, componentList, posIndex }) => {
  const options = ['Kaufen', 'Finanzierung', 'Teilfinanzierung', 'Energy Community'];
  const activeIndex = options.indexOf(componentList[posIndex] as string);
  const handleSetList = (index: number, option: string) => {
    // Call the setList function
    setList(index, option);

    window.open('https://www.avm-energy.de/ECInterface', '_blank');
  };
  return (
    <div id={`component-${posIndex}`}>
      <RoofDetailsForm></RoofDetailsForm>
      <ToggleButtonBar
        options={options}
        setList={handleSetList}
        activeIndex={activeIndex}
        posIndex={posIndex}
      />
    </div>
  );
};

export default DachComponent;
