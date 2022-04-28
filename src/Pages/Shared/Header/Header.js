import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='my-nav'>
                <Navbar bg="danger" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className='fs-1 fst-italic fw-bold'>Fruit Jet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <CustomLink to="/">HOME</CustomLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;