import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Products from './Products';
import SearchFilter from './SearchFilter';
import { FilterData, ProductData } from './Data';

const BareezeMan = () => {
  const [product, setProduct] = useState(ProductData);

  const handleChange = (menuItem, menu) => {
    const val = menuItem.target.value;
    const result = ProductData.filter((x)=>{
      return x[menu] === val
    })
    setProduct(result)
  }

  const AllProduct = () => setProduct(ProductData);
  
  return (
    <>
       <div className="hero">
        <img src="./assests/images/bareezeMan/manBlack2.jpg" width="100%" alt="" height='400px' />
      </div>
      <Container fluid>
        <SearchFilter FilterData={FilterData} handleChange={handleChange} AllProduct={AllProduct} />
        <Products product={product} />
      </Container>
    </>
  )
}

export default BareezeMan