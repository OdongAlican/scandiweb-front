import React, { useEffect, useState } from 'react';
import AppContainer from '../components/AppContainer';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import { productTypes, initialState } from '../utills/helpers';

const CreateProduct = () => {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitProduct = () => console.log(values, 'Product Submitted');
  useEffect(() => console.log(values?.type, 'state'), [values?.type]);

  return (
    <AppContainer
      header="Product Add"
      btnFunction={submitProduct}
      btnOne="Save"
      btnTwo="Cancel">
      <form action='submit'>
        <div className="left-form-section">
          <Input inputName="SKU" inputId="sku" inputValue={values?.sku} handleChange={handleChange} />
          <Input inputName="Name" inputId="name" inputValue={values?.name} handleChange={handleChange} />
          <Input inputName="Price ($)" inputId="price" inputValue={values?.price} handleChange={handleChange} />
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
              <Input inputName="Size (MB)" inputId="size" inputValue={values?.size} handleChange={handleChange} />
              <TextArea />
            </div>) :
              values?.type === 'Furniture' ? (<div>
                <Input inputName="Height (CM)" inputId="height" inputValue={values?.height} handleChange={handleChange} />
                <Input inputName="Width (CM)" inputId="width" inputValue={values?.width} handleChange={handleChange} />
                <Input inputName="Length (CM)" inputId="length" inputValue={values?.length} handleChange={handleChange} />
                <TextArea />
              </div>) :
                values?.type === 'Book' ? (<div>
                  <Input inputName="Weight (KG)" inputId="weight" inputValue={values?.weight} handleChange={handleChange} />
                  <TextArea />
                </div>) : null
          }
        </div>
      </form>
    </AppContainer>

  )
}

export default CreateProduct;