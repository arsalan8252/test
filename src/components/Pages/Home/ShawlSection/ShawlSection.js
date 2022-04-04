import React from 'react'
import { Button, Container } from 'react-bootstrap'

const ShawlSection = () => {
  return (
    <>
        <Container className='my-4 px-5 py-4'>
        <div className="text-center">
            <h4 className='text-uppercase mb-4'>Shawls</h4>
        </div>
            <div className="d-flex w-100">
               <div className="">
               <img src='./assests/images/shawl1.jpg' className='d-block w-100' />
               <Button className='commonBtn mt-4'>Summer Shawl</Button>
               </div>
               <div className="">
               <img src='./assests/images/shawl2.jpg' className='d-block w-100' />
               <Button className='commonBtn mt-4'>Winter Shawl</Button>
               </div>
            </div>
        </Container>
    </>
  )
}

export default ShawlSection