import { useEffect, useState } from 'react';
import axios from 'axios';
import AppContainer from '../components/AppContainer';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9000/products');
      setProducts(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getProducts() }, []);

  const deleteProducts = () => console.log('List deleted');

  return (
    <AppContainer
      header="Product List"
      btnOne="ADD"
      btnFunction={deleteProducts}
      btnTwo="MASS DELETE">
      <div className="list-content">
        {products?.length > 0 ? (products?.map(element => <ProductCard key={element?.id} data={element} />)) : null}
      </div>
    </AppContainer>
  );
}

export default Products;
