import React from 'react';
import { Swipper1 } from '../Sliders/Slider';
import { Container } from 'react-bootstrap';

const TopSelling = () => {
  return (
    <>
        <Container className='my-4 p-4'>
            <div className="text-center">
                <h4 className='text-uppercase mb-4'>Top Selling</h4>
            </div>
            <Swipper1 />
        </Container>
    </>
  )
}

export default TopSelling