import React from 'react';
import '../styles/Container.scss';

const Button = ({ text, type, clickEvent }) => {
    return (
        <>
            <button
                id={type === 'delete' ? 'delete-product-btn'
                    : type === 'cancel' ? 'cancel-btn'
                        : 'create-btn'}
                onClick={clickEvent}>
                {text}
            </button>
        </>
    )
}

export default Button;