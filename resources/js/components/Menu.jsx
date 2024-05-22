import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function Menu() {
    const isLoggedIn = Cookies.get("isLoggedIn");
    const username = Cookies.get("username");
    const navigate = useNavigate();

    const logOut = () => {
        Cookies.remove("isLoggedIn");
        Cookies.remove("username");
        Cookies.remove("token");
        navigate("/login");
        swal("Sesión cerrada", "¡Has cerrado sesión!", "success");
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img
                            src="https://img.freepik.com/premium-vector/cute-funny-happy-weed-marijuana-leaf-character_92289-2078.jpg?w=2000"
                            width="100"
                            height="100"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/new">Nuevos Lanzamientos</Nav.Link>
                            <Nav.Link as={Link} to="/men">Suplementos gym</Nav.Link>
                            <Nav.Link as={Link} to="/women">Vitaminas y suplementos</Nav.Link>
                            <Nav.Link as={Link} to="/children">Smoke shop</Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn ? (
                                <>
                                    <NavDropdown title={username.toUpperCase()} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={logOut}>Cerrar sesión</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/cart">
                                        <img
                                            src="https://img.icons8.com/external-thin-kawalan-studio/24/null/external-cart-shopping-e-commerce-thin-kawalan-studio.png"
                                            alt="Cart"
                                        />
                                    </Nav.Link>
                                </>
                            ) : (
                                <NavDropdown title="Cuenta" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="login">Iniciar Sesión</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="register">Registro</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section style={{ textAlign: 'center', margin: '2rem 0', fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: 'white' }}>
                <Outlet />
            </section>
        </>
    );
}

export default Menu;
