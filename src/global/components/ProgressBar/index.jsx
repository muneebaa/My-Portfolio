import React from 'react';
import './style.css';

const ProgressBar = ({ progressStyle, fillerStyle }) => {
  return (
    <div className='progress' style={{ ...progressStyle }}>
      <div className='filler' style={{ ...fillerStyle }}></div>
    </div>
  );
};

export default ProgressBar;
