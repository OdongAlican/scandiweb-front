import React from 'react';
import '../styles/Card.scss';
import { capitalizeStr, decodeBase64Data, enumerateObject } from '../utills/helpers';
import Checkbox from './Checkbox';

const ProductCard = ({ data }) => {

    const displayData = (obj) => {
        const val = decodeBase64Data(obj);
        const res = enumerateObject(val);
        const str = capitalizeStr(res?.key) + ' : ' + res?.value;
        return str;
    };

    return (
        <div className="card">
            <Checkbox />
            <div>
                <p>{data?.sku && data?.sku}</p>
                <h4><b>{data?.name && data?.name}</b></h4>
                <p>{data?.price && data?.price}</p>
                <p>{displayData(data?.data)}</p>
            </div>
        </div>
    )
}

export default ProductCard;