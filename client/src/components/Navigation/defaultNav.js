import React from 'react';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import './style.css'

function defaultNav() {
    return (
        <div>

            <Navbar expand="lg" className="text-light bg-success">
                <Container>
                    <Navbar.Brand href="/">Blogging System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link href="/posts">Posts</Nav.Link>
                            <Nav.Link target="_blank" href="https://github.com/elechigeorge">Github</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/register">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default defaultNav;
