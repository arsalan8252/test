import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const TopNav = () => {
  return (
    <>
      <Container fluid className="bg-white d-none d-lg-block position-relative">
        <Row>
          <Col lg={6}>
            <Nav>
              <Nav.Link className="toplinks">Arsalan Tahir</Nav.Link>
              <Nav.Link className="toplinks p-0 mt-2">|</Nav.Link>
              <Nav.Link className="toplinks">
                arsalan.tahir439@gmail.com
              </Nav.Link>
              <Nav.Link className="toplinks p-0 mt-2">|</Nav.Link>
              <Nav.Link className="toplinks">
                +92 307-4675439
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={6}>
            <Nav className="justify-content-end ">
              <Nav.Link className="toplinks">Help</Nav.Link>
              <Nav.Link className="toplinks p-0 mt-2">|</Nav.Link>
              <Nav.Link className="toplinks">
                FAQ's
              </Nav.Link>
              <Nav.Link className="toplinks p-0 mt-2">|</Nav.Link>
              <Nav.Link className="toplinks">
                Support
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopNav;
