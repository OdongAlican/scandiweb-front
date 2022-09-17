import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppContainer from '../components/AppContainer';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import { productTypes, initialState, formValidator } from '../utills/helpers';
import { baseURL } from '../utills/routes';

const CreateProduct = () => {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitProduct = async () => {
    const data = formValidator(values);
    let response;
    try {
      response = await axios.post(baseURL, data, {
        headers: { "content-type": 'application/json' }
      });
      console.log(response, 'response');
    } catch (error) {
      console.log(error?.response?.data);
    }
  }
  useEffect(() => setValues({ ...values, length: '', width: '', height: '', size: '', weight: '' }), [values?.type]);

  return (
    <AppContainer
      header="Product Add"
      btnFunction={submitProduct}
      btnOne="Save"
      btnTwo="Cancel">
      <form action='submit'>
        <div className="left-form-section">
          <Input tabIndex={1} inputName="SKU" inputId="sku" inputValue={values?.sku} handleChange={handleChange} placeholder="Enter SKU" />
          <Input tabIndex={2} inputName="Name" inputId="name" inputValue={values?.name} handleChange={handleChange} placeholder="Enter Name" />
          <Input tabIndex={3} inputName="Price ($)" inputId="price" inputValue={values?.price} handleChange={handleChange} placeholder="Enter price (e.g 12)" />
          <Select
            selectID="productType"
            selectOptions={productTypes}
            selectValues={values?.type}
            selectName="type"
            selectLabel="Type Switcher"
            handleChange={handleChange} />
        </div>
        <div className="right-form-section">
          {
            values?.type === 'DVD' ? (<div>
              <Input tabIndex={4} inputName="Size (MB)" inputId="size" inputValue={values?.size} handleChange={handleChange} placeholder="Enter size (e.g 2)" />
              <TextArea tabIndex={5} inputName="Description" inputId="description" inputValue={values?.description} handleChange={handleChange} />
            </div>) :
              values?.type === 'Furniture' ? (<div>
                <Input tabIndex={4} inputName="Height (CM)" inputId="height" inputValue={values?.height} handleChange={handleChange} placeholder="Enter height (e.g 2)" />
                <Input tabIndex={5} inputName="Width (CM)" inputId="width" inputValue={values?.width} handleChange={handleChange} placeholder="Enter width (e.g 2)" />
                <Input tabIndex={6} inputName="Length (CM)" inputId="length" inputValue={values?.length} handleChange={handleChange} placeholder="Enter length (e.g 2)" />
                <TextArea tabIndex={7} inputName="Description" inputId="description" inputValue={values?.description} handleChange={handleChange} />
              </div>) :
                values?.type === 'Book' ? (<div>
                  <Input tabIndex={4} inputName="Weight (KG)" inputId="weight" inputValue={values?.weight} handleChange={handleChange} placeholder="Enter weight (e.g 2)" />
                  <TextArea tabIndex={5} inputName="Description" inputId="description" inputValue={values?.description} handleChange={handleChange} />
                </div>) : null
          }
        </div>
      </form>
    </AppContainer>

  )
}

export default CreateProduct;