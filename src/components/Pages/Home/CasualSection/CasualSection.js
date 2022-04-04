import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CasualSection = () => {
  return (
    <>
        <Container className='my-4 p-4'>
        <div className="text-center mb-4 text-uppercase">
            <h4>Casuals</h4>
        </div>
           <Row>
               <Col lg={3} md={3} sm={12} className='mb-2'>
               <img src='./assests/images/casuals/Casual01.png' width='100%'/>
               </Col>
               <Col lg={3} md={3} sm={12} className='mb-2'>
               <img src='./assests/images/casuals/chandBaghBlueFull.jpg' width='100%' />
               </Col>
               <Col lg={3} md={3} sm={12} className='mb-2'>
               <img src='./assests/images/casuals/banjaraorangeFull.jpg' width='100%' />
               </Col>
               <Col lg={3} md={3} sm={12} className='mb-2'>
               <img src='./assests/images/casuals/arezuWhiteFront.jpg' width='100%' />
               </Col>
           </Row>
        </Container>
    </>
  )
}

export default CasualSection