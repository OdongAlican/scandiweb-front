import React from 'react';
import '../styles/Input.scss';

const Input = ({ inputType = 'text', inputName, inputId, inputValue = "", handleChange, tabIndex }) => {
  return (
    <div className='input-container'>
      <label htmlFor={inputName}>{inputName}</label>
      <input tabIndex={tabIndex} type={inputType} id={inputId} value={inputValue} name={inputId} onChange={e => handleChange(e)} />
    </div>
  )
}

export default Input;