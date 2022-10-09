export const productTypes = [
    { id: '', value: '', text: 'Type Switcher' },
    { id: 'DVD', value: 'DVD', text: 'DVD' },
    { id: 'Furniture', value: 'Furniture', text: 'Furniture' },
    { id: 'Book', value: 'Book', text: 'Book' },
];

export const initialState = {
    sku: '', name: '', price: '', type: '',
    size: '', height: '', width: '', length: '', weight: ''
};

const concatinate = (value) => {
    if (value?.height && value?.width && value?.length) return `${value?.height}x${value?.width}x${value?.length}`;
    return '';
}

export const enumerateObject = (obj) => {
    let result;
    const dt = JSON.parse(obj)
    Object.entries(dt).forEach(([key, value]) => {
        if (value.length > 0) { result = { value, key } };
    });
    return result;
}

export const formValidator = obj => {
    let validObj = true;
    const { data, ...validForm } = obj;
    Object.values(validForm).forEach(ele => { if (!ele.length) { return validObj = false } });

    if (!enumerateObject(JSON.stringify(obj?.data)) || !validObj) return ({ ...validForm, data: obj?.data, error: true });
    return obj;
};

const base64Format = (value) => {
    const formatOne = {
        ...value, data: { size: value?.size, weight: value?.weight, dimension: concatinate(value), }
    }
    const { size, weight, height, length, width, ...formatTwo } = formatOne;
    const validatedData = formValidator(formatTwo);
    if (validatedData?.error) return validatedData;
    return { ...formatTwo, data: btoa(JSON.stringify(formatTwo?.data)) }
}

export const convertToBase64 = (formData) => base64Format(formData);

export const decodeBase64Data = (data) => atob(data);

export const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);
export const determineUnit = str => str === 'size' ? 'MB' : str === 'weight' ? 'KG' : '';
export const elementIds = arrValues => arrValues.map(val => parseInt(val?.id, 10));