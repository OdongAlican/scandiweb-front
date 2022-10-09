import React from 'react';
import '../styles/Input.scss';

const Input = ({
  inputType = 'text',
  inputName,
  inputId,
  inputValue = "",
  handleChange,
  tabIndex,
  error,
  placeholder = "Enter text"
}) => {
  return (
    <>
      <div className='input-container'>
        <label htmlFor={inputName}>{inputName}</label>
        <input
          placeholder={placeholder}
          tabIndex={tabIndex}
          type={inputType}
          id={inputId}
          value={inputValue}
          name={inputId}
          onChange={e => handleChange(e)} />
      </div>
      {error && <div className='error-message'>Field is required</div>}
    </>
  )
}

export default Input;