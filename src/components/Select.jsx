import React from 'react';

const Select = ({ selectOptions, selectName, handleChange, selectValues, error, selectLabel, selectID }) => {
    return (
        <>
            <div className='select-container'>
                <label htmlFor={selectName}>{selectLabel}</label>
                <select id={selectID} name={selectName} value={selectValues} onChange={e => handleChange(e)}>
                    {selectOptions?.map(opt => (<option id={opt.id} key={opt.value} value={opt.value}>{opt.text}</option>))}
                </select>
            </div>
            {error && <div className='error-message'>Field is required</div>}
        </>
    )
}

export default Select;