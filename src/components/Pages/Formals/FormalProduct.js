import React from 'react';
import { useParams } from 'react-router-dom';
import {ProductData} from './Data';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";

const BareezeProduct = () => {

    const {id} = useParams();
    const myData = ProductData.map((data) => data);
    const final = myData.find((x) => x.id == id)
  return (
    <>
         <Container className="my-4 p-3">
        <Row>
          <Col lg={6} md={6} sm={12} className='mt-3'>
            <div className="border p-2">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                modules={[Autoplay, FreeMode]}
                autoplay={{ delay: 2500 }}
                className="mySwiper"
              >
                <SwiperSlide><div className="myOverlay"><img src={final.img1}/></div></SwiperSlide>

                <SwiperSlide>
                <div className="myOverlay"><img src={final.img2}/></div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="myOverlay"><img src={final.img3}/></div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="myOverlay"><img src={final.img4}/></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>

          <Col md={6} sm={12} lg={6} className='mt-3'>
            <div className="p-3 border">
                <h5 className="text-capitalize">Name: {final.name}</h5>
                <h5 className="text-capitalize">Price: {final.price}</h5>
                <h6 className="text-black-50">Color: {final.color}</h6>
                <h6 className="text-black-50">Fabric: {final.fabric}</h6>
                <h6 className="text-black-50">Rating: {final.rating}</h6>
                <h6 className="text-black-50">Season: {final.season}</h6>
                <h6 className="text-black-50">Type: {final.type}</h6>
                <h6 className="text-black-50">Caregory: {final.category}</h6>
                <p className='text-black small'>{final.description}</p>
                <Button className='commonBtn'>Add To Cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BareezeProduct