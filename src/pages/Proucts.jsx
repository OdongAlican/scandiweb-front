import { useEffect, useState } from 'react';
import axios from 'axios';
import AppContainer from '../components/AppContainer';
import ProductCard from '../components/ProductCard';
import { baseURL, ROUTES } from '../utills/routes';
import { elementIds } from '../utills/helpers';

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
      const response = await axios.get(baseURL);
      const res = response?.data;
      console.log(response?.data, 'response data');
      setProducts(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getProducts() }, []);

  const deleteProducts = async () => {
      fetch(baseURL, {
        method: 'delete',
        body: JSON.stringify(elementIds(deleteArray))
      }).then(function (response) {
        setProducts(products.filter(a => !deleteArray.map(b => b.id).includes(a.id)));
        return response.json();
      }).catch(er => console.error(er));
  }

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
