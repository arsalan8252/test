import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Products = ({ product }) => {
  return (
    <>
      <Container className="border border p-3 my-5">
        <Row>
          {product.map((data) => (
            <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
              <Card key={data.id} className="myCard">
                <Card.Img src={data.img1} className="imgHover1" />
                <Card.Img src={data.img2} className="imgHover2" />
                <Card.Body>
                  <Card.Title className="h6 text-capitalize mb-3">
                    {data.name}
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Subtitle>Pkr {data.price}</Card.Subtitle>
                    <Card.Subtitle className="h6 small text-black-50">
                      Rating {data.rating}
                    </Card.Subtitle>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to={`/bareezeproduct/${data.id}`}>
                      <Button className="commonBtn border rounded-0 shadow-none mt-3">
                        View Detail
                      </Button>
                    </Link>
                    <Button className="commonBtn border rounded-0 shadow-none mt-3">
                    Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
