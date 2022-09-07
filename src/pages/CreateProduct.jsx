import React from 'react'
import AppContainer from '../components/AppContainer';

const CreateProduct = () => {

  const submitProduct = () => console.log('Product Submitted');
  
  return (
    <AppContainer
      header="Product Add"
      btnFunction={submitProduct}
      btnOne="Save"
      btnTwo="Cancel">
      <div>CreateProduct</div>
    </AppContainer>

  )
}

export default CreateProduct;