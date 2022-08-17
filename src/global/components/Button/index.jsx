import React from 'react';
import './style.css';

function Button({ value, borderColor, backgroundColor, textColor }) {
  return (
    <>
      <button
        className='button-main'
        style={{
          color: textColor,
          backgroundColor: backgroundColor,
          border: borderColor ? `1px solid ${borderColor}` : 'none',
        }}>
        {value}
      </button>
    </>
  );
}

export default Button;
