import React from 'react';

const Checkbox = ({ handleChange, item, checkedItems }) => {
  return (
    <input
      id={item.id} checked={checkedItems[item.id]} onChange={handleChange}
      type="checkbox" className='delete-checkbox' />
  )
}

export default Checkbox;