import React from 'react';

type ToggleButtonBarProps = {
  options: string[];
  setList: (index: number, option: string) => void;
  activeIndex: number;
  posIndex: number;
};

const ToggleButtonBar: React.FC<ToggleButtonBarProps> = ({ options, setList, activeIndex, posIndex }) => {
  const isActive = (index: number) => {
    return index === activeIndex ? 'border-4 border-[#F9BB00]' : '';
  };

  // Function to handle image load error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/Default.png'; // Path to the default image
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {options.map((option, index) => (
        <div key={option} className="flex flex-col items-center cursor-pointer" onClick={() => setList(posIndex, option)}>
          <img
            src={`/${option}.png`} // Assuming the icon file is named as the option
            alt={option}
            onError={handleImageError} // Attach the error handler
            className={`w-60 h-60 object-cover ${isActive(index)}`}
            style={{ width: '240px', height: '240px' }}
          />
          <p className="mt-2 text-center font-bold text-AVMBlue-100">{option}</p>
        </div>
      ))}
    </div>
  );
};

export default ToggleButtonBar;
