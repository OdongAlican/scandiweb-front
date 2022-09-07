import React from 'react';
import '../styles/Card.scss';
import Checkbox from './Checkbox';

const ProductCard = () => {
    return (
        <div className="card">
            <Checkbox />
            <div>
                <p>Text content</p>
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default ProductCard;