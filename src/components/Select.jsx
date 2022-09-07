import React from 'react';

const Select = ({ selectOptions, selectName, handleChange, selectValues, selectLabel, selectID }) => {
    return (
        <div className='select-container'>
            <label htmlFor={selectName}>{selectLabel}</label>
            <select id={selectID} name={selectName} value={selectValues} onChange={e => handleChange(e)}>
                {selectOptions?.map(opt => (<option id={opt.id} key={opt.value}>{opt.text}</option>))}
            </select>
        </div>
    )
}

export default Select;