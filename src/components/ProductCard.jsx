import React, { useEffect, useState } from 'react';
import '../styles/Card.scss';
import { capitalizeStr, decodeBase64Data, determineUnit, enumerateObject } from '../utills/helpers';
import Checkbox from './Checkbox';

const ProductCard = ({ data, handleChange, checkedItems }) => {

    const displayData = (obj) => {
        const val = decodeBase64Data(obj);
        const res = enumerateObject(val);
        const str = capitalizeStr(res?.key) + ' : ' + res?.value + ' ' + determineUnit(res?.key);
        return str;
    };

    return (
        <div className="card">
            <Checkbox handleChange={handleChange} item={data} checkedItems={checkedItems} />
            <div>
                <p>{data?.sku && data?.sku}</p>
                <h4><b>{data?.name && data?.name}</b></h4>
                <p>{data?.price && `${data?.price}.00 $`}</p>
                <p>{displayData(data?.data)}</p>
            </div>
        </div>
    )
}

export default ProductCard;