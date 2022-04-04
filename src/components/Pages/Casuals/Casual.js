import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import Products from "./Products";
import { FilterData, ProductData } from "./Data";
import { Container } from "react-bootstrap";
const Casual = () => {

  const [product, setProduct] = useState(ProductData);
  
  const handleChange = (menuItem, menu) => {
      const val = menuItem.target.value;
      const result = ProductData.filter((x)=>{
        return x[menu] === val
      })
      setProduct(result);
  }
  const AllProduct = () => setProduct(ProductData)

  return (
    <>
      <div className="hero">
        <img src="./assests/images/casuals/banner.jpg" width="100%" alt="" />
      </div>
      <Container fluid>
        <SearchFilter FilterData={FilterData} handleChange={handleChange} AllProduct={AllProduct} />
        <Products product={product} />
      </Container>
    </>
  );
};

export default Casual;
