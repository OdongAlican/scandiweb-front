import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AppContainer from '../components/AppContainer';
import Input from '../components/Input';
import Select from '../components/Select';
import { productTypes, initialState, convertToBase64 } from '../utills/helpers';
import { baseURL, ROUTES } from '../utills/routes';

const CreateProduct = () => {

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitProduct = async () => {
    setSubmitState(true);
    const data = convertToBase64(values);

    if (data?.error) return setErrors(data);

    fetch(baseURL, { method: 'post', body: JSON.stringify(data) })
      .then(function (response) { return response.json(); })
      .then(function (data) { setSubmitState(false); console.log(data); navigate(ROUTES?.products) })
      .catch(er => { console.error(er); setSubmitState(false); });
  }

  useEffect(() => setValues({ ...values, length: '', width: '', height: '', size: '', weight: '' }), [values?.type]);
  const validateInput = val => submitState && val?.length === 0 ? true : false;
  
  return (
    <AppContainer
      header="Product Add"
      btnFunction={submitProduct}
      btnOne="Save"
      btnTwo="Cancel">
      <form action='submit' id='product_form'>
        <div className="left-form-section">
          <Input tabIndex={1} inputName="SKU" inputId="sku" inputValue={values?.sku} handleChange={handleChange} placeholder="Enter SKU" error={validateInput(errors?.sku)} />
          <Input tabIndex={2} inputName="Name" inputId="name" inputValue={values?.name} handleChange={handleChange} placeholder="Enter Name" error={validateInput(errors?.name)} />
          <Input tabIndex={3} inputName="Price ($)" inputId="price" inputValue={values?.price} handleChange={handleChange} placeholder="Enter price (e.g 12)" error={validateInput(errors?.price)} />
          <Select
            selectID="productType"
            selectOptions={productTypes}
            selectValues={values?.type}
            selectName="type"
            error={validateInput(errors?.type)}
            selectLabel="Type Switcher"
            handleChange={handleChange} />
        </div>
        <div className="right-form-section">
          {
            values?.type === 'DVD' ? (<div>
              <Input tabIndex={4} inputName="Size (MB)" inputId="size" inputValue={values?.size} handleChange={handleChange} placeholder="Enter size (e.g 2)" error={validateInput(errors?.data?.size)} />
              <div className='descrtion-section'>Please, provide size</div>
            </div>) :
              values?.type === 'Furniture' ? (<div>
                <Input tabIndex={4} inputName="Height (CM)" inputId="height" inputValue={values?.height} handleChange={handleChange} placeholder="Enter height (e.g 2)" error={validateInput(values?.height)} />
                <Input tabIndex={5} inputName="Width (CM)" inputId="width" inputValue={values?.width} handleChange={handleChange} placeholder="Enter width (e.g 2)" error={validateInput(values?.width)} />
                <Input tabIndex={6} inputName="Length (CM)" inputId="length" inputValue={values?.length} handleChange={handleChange} placeholder="Enter length (e.g 2)" error={validateInput(values?.length)} />
                <div className='descrtion-section'>Please, provide dimensions</div>
              </div>) :
                values?.type === 'Book' ? (<div>
                  <Input tabIndex={4} inputName="Weight (KG)" inputId="weight" inputValue={values?.weight} handleChange={handleChange} placeholder="Enter weight (e.g 2)" error={validateInput(errors?.data?.weight)} />
                  <div className='descrtion-section'>Please, provide weight</div>
                </div>) : null
          }
        </div>
      </form>
    </AppContainer>

  )
}

export default CreateProduct;