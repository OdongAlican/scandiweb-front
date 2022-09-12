import React from 'react';

const TextArea = ({ inputName = "Description", inputId, inputValue, handleChange, tabIndex }) => {
  return (
    <div className='text-area-container'>
      <label htmlFor={inputName}>{inputName}</label>
      <textarea
        tabIndex={tabIndex}
        id={inputId}
        value={inputValue}
        name={inputId}
        onChange={e => handleChange(e)}
        cols="30"
        rows="6"></textarea>
    </div>
  )
}

export default TextArea;