import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Products from './Products';
import SearchFilter from './SearchFilter';
import { FilterData, ProductData } from './Data';

const Print = () => {
  const [product, setProduct] = useState(ProductData);

  const handleChange = (menuItem, menu) => {
    const val = menuItem.target.value;
    const result = ProductData.filter((x)=>{
      return x[menu] === val
    })
    setProduct(result);
  }

  const AllProduct = () => setProduct(ProductData);

  return (
    <>
       <div className="hero">
        <img src="./assests/images/prints/banner.jpg" width="100%" alt="" />
      </div>
      <Container fluid>
        <SearchFilter FilterData={FilterData} handleChange={handleChange} AllProduct={AllProduct} />
        <Products product={product} />
      </Container>
    </>
  )
}

export default Print