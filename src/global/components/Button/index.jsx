import React from 'react';
import './style.css';

function Button({ value, borderColor, backgroundColor, textColor, marginTop }) {
  return (
    <>
      <button
        className='button-main'
        style={{
          color: textColor,
          backgroundColor: backgroundColor,
          border: borderColor ? `1px solid ${borderColor}` : 'none',
          marginTop: marginTop,
        }}>
        {value}
      </button>
    </>
  );
}

export default Button;
