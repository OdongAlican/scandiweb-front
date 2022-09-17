import { useEffect, useState } from 'react';
import axios from 'axios';
import AppContainer from '../components/AppContainer';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [checkedItems, setCheckedItem] = useState({});
  const [deleteArray, setDeleteArray] = useState([]);

  const handleChange = (event) => {
    setCheckedItem({ id: event.target.id, value: event.target.checked });
  }

  const filterArray = (data, current) => data.forEach(ele => {
    if (ele?.id === current?.id && current?.value === true) {
      return setDeleteArray([...deleteArray, ele]);
    }
    if (ele?.id === current?.id && current?.value === false) {
      const data = deleteArray.filter(val => val?.id !== ele?.id)
      setDeleteArray(data);
    }
    return;
  });

  useEffect(() => { filterArray(products, checkedItems) }, [checkedItems]);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9000/products');
      setProducts(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getProducts() }, []);

  const deleteProducts = () => setProducts(products.filter(a => !deleteArray.map(b => b.id).includes(a.id)));

  return (
    <AppContainer
      header="Product List"
      btnOne="ADD"
      btnFunction={deleteProducts}
      btnTwo="MASS DELETE">
      <div className="list-content">
        {products?.length > 0 ? (products?.map(element => <ProductCard checkedItems={checkedItems} handleChange={handleChange} key={element?.id} data={element} />)) : null}
      </div>
    </AppContainer>
  );
}

export default Products;
