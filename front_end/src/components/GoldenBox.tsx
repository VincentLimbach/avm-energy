import React from 'react';

type GoldenBoxProps = {
  text: string;
  onClick?: () => void;
};

const GoldenBox: React.FC<GoldenBoxProps> = ({ text, onClick}) => {
  const boxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #F9BB00', // Golden border color
    marginBottom: '1rem',
    fontSize: '1.2rem',
    backgroundColor: '#ffffff', // White background
    color: '#F9BB00', // Golden text color
    borderRadius: '1.5rem',
    padding: 'calc(0.5rem + 1px) calc(1.5rem + 1px)',
    whiteSpace: 'pre-wrap',
  };

  return (
    <div style={boxStyle} onClick={onClick}>
      {text}
    </div>
  );
};

export default GoldenBox;
