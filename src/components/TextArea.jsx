import React from 'react';

const TextArea = ({inputName="Description"}) => {
  return (
    <div className='text-area-container'>
        <label htmlFor={inputName}>{inputName}</label>
        <textarea name="description" id="text-area" cols="30" rows="6"></textarea>
    </div>
  )
}

export default TextArea;