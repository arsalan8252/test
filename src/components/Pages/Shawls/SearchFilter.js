import React from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";

const SearchFilter = ({FilterData, handleChange, AllProduct}) => {
  return (
    <>
      <Container className="border p-3 my-5">
        <Row className='justify-content-center'>

         {/* All products */}
         <Col lg={2} md={6} sm={12} className="mb-2">
           <Button className='commonBtn w-100 border rounded-0 p-2 shadow-none' onClick={AllProduct}>All Products</Button>
          </Col>

        {/* price */}
          <Col lg={2} md={6} sm={12} className="mb-2">
            <select className="w-100 border p-2 shadow-none" onChange={(e)=>handleChange(e,'price')}>
              <option>Price</option>
              {FilterData[0].price.map((data, i) => (
                <option value={data} key={i}>
                  Pkr {data}
                </option>
              ))}
            </select>
          </Col>

          {/* color */}
          <Col lg={2} md={6} sm={12} className="mb-2">
            <select className="w-100 border p-2 shadow-none" onChange={(e)=>handleChange(e,'color')}>
              <option>Colors</option>
              {FilterData[0].color.map((data, i) => (
                <option value={data} key={i}>
                    {data}
                </option>
              ))}
            </select>
          </Col>

          {/* type */}
          <Col lg={2} md={6} sm={12} className="mb-2">
            <select className="w-100 border p-2 shadow-none" onChange={(e)=>handleChange(e,'type')}>
              <option>Type</option>
              {FilterData[0].type.map((data, i) => (
                <option value={data} key={i}>
                  {data}
                </option>
              ))}
            </select>
          </Col>

          {/* fabric */}
          <Col lg={2} md={6} sm={12} className="mb-2">
            <select className="w-100 border p-2 shadow-none" onChange={(e)=>handleChange(e,'fabric')}>
              <option>Fabric</option>
              {FilterData[0].fabric.map((data, i) => (<option value={data} key={i}>{data}</option>))}
            </select>
          </Col>

          {/* season */}
          <Col lg={2} md={6} sm={12} className="mb-2">
            <select className="w-100 border p-2 shadow-none" onChange={(e)=>handleChange(e,'season')}>
              <option>Season</option>
              {FilterData[0].season.map((data, i) => (
                <option value={data} key={i}>
                  {data}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SearchFilter