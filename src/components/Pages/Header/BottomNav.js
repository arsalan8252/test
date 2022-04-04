import React from 'react';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Search} from 'react-bootstrap-icons';
import logo from './logo.jpeg'

const BottomNav = ({SearchToggle,closeSearch}) => {
  
    window.addEventListener('scroll',()=>{
      const scrolled = window.scrollY >1000;
      const nav = document.getElementById('nav');
      // nav.classList.add('')

    })

  return (
    <>
      <Container id='nav' fluid className="bg-white px-4 border-top myNav">
        <Navbar expand="lg">
            <Link to='/' className=''> Ecommerece</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='border bg-white' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to='/' className=' mx-2 mt-2'>Home</Link>
                <Link to='/casual' className=' mx-2 mt-2'>Casuals</Link>
                <Link to='/formal' className=' mx-2 mt-2'>Formals</Link>
                <Link to='/print' className='mx-2 mt-2'>Prints</Link>
                <Link to='/shawl' className='mx-2 mt-2'>Shawls</Link>
                <Link to='/bottom' className=' mx-2 mt-2'>Bottoms</Link>
                <Link to='/bareezeman' className=' mx-2 mt-2'>BareezeMan</Link>
                <Link to='/register'><Button className='shadow-none btn btn-dark text-white mx-1 mb-lg-0 mb-1'>Register</Button></Link>
                <Button className='shadow-none btn btn-dark mx-1 mb-lg-0 mb-1' onClick={()=>SearchToggle()}><i class="bi bi-search text-white"></i></Button>
                <Button className='shadow-none btn btn-dark mx-1'><i className="bi bi-bag text-white"></i></Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default BottomNav