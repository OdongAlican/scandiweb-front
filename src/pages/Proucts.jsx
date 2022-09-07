import AppContainer from '../components/AppContainer';
import ProductCard from '../components/ProductCard';

function Products() {

  const arry = [1, 2, 3, 4, 5];
  const deleteProducts = () => console.log('List deleted');
  
  return (
    <AppContainer
      header="Product List"
      btnOne="ADD"
      btnFunction={deleteProducts}
      btnTwo="MASS DELETE">
      <div className="list-content">
        {arry?.map(element => <ProductCard key={element} />)}
      </div>
    </AppContainer>
  );
}

export default Products;
