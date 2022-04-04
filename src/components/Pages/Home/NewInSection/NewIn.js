import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap'
import { Swipper1 } from '../Sliders/Slider'

const NewIn = () => {
  return (
    <>
        <Container className='my-4 p-4'>
            <Row>
                <Col lg={3}>
                    <div className="d-flex justify-content-center flex-column mt-lg-5 mb-2">
                        <h1>NEW IN</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id magnam quae molestiae velit aut!</p>
                        <Button className='commonBtn btn shadow-none'>View All</Button>
                    </div>
                </Col>
                <Col lg={9}>
                    <Swipper1 />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default NewIn