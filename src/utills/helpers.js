export const productTypes = [
    { id: '', value: '', text: 'Type Switcher' },
    { id: 'DVD', value: 'dvd', text: 'DVD' },
    { id: 'Furniture', value: 'furniture', text: 'Furniture' },
    { id: 'Book', value: 'book', text: 'Book' },
];

export const initialState = {
    sku: '', name: '', price: '', type: '', description: '',
    size: '', height: '', width: '', length: '', weight: ''
};

const concatinate = (value) => {
    if (value?.height && value?.width && value?.length) return `${value?.height}x${value?.width}x${value?.length}`;
    return '';
}

const base64Format = (value) => {
    const formatOne = {
        ...value, data: { size: value?.size, weight: value?.weight, dimension: concatinate(value), }
    }
    const { size, weight, height, length, width, ...formatTwo } = formatOne;
    return { ...formatTwo, data: btoa(JSON.stringify(formatTwo?.data)) }
}

export const formValidator = (formData) => base64Format(formData);

export const decodeBase64Data = (data) => atob(data);

export const enumerateObject = (obj) => {
    let result;
    const dt = JSON.parse(obj)
    Object.entries(dt).forEach(([key, value]) => {
        if (value.length > 0) { result = { value, key } };
    });
    return result;
}

export const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);
export const determineUnit = str => str === 'size' ? 'MB' : str === 'weight' ? 'KG' : ''