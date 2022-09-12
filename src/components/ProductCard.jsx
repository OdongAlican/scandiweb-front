import React from 'react';
import '../styles/Card.scss';
import Checkbox from './Checkbox';

const ProductCard = ({ data }) => {
    return (
        <div className="card">
            <Checkbox />
            <div>
                <p>{data?.sku && data?.sku}</p>
                <h4><b>{data?.name && data?.name}</b></h4>
                <p>{data?.price && data?.price}</p>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default ProductCard;