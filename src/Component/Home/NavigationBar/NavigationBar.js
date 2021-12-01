import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="nabvar-ss"  bg="dark" expand="lg">
                <Container className="intro py-4">
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    <Navbar.Toggle className="tooglebar" aria-controls="navbarScroll" />
                    <Navbar.Collapse   id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        
                        </Nav>
                        <Nav className="">
                            <Link className="ms-5 text-light text-decoration-none py-3 pb-2 px-2  nav-borderb  " to="/">Home</Link>
                            <HashLink className="ms-5 text-light text-decoration-none py-3 pb-2 px-2  nav-borderb  " to="/#about">About</HashLink>
                            <HashLink className="ms-5 text-light text-decoration-none py-3 pb-2 px-2  nav-borderb  " to="/#projects" >Project</HashLink>
                            <Link className="ms-5 text-light text-decoration-none py-3 pb-2 px-2  nav-borderb  " to="/projects">Blog</Link>
                            <HashLink  className="ms-5 text-light text-decoration-none py-3 pb-2 px-2  nav-borderb  " to="/#contact">Contact</HashLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;