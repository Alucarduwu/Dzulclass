import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import swal from 'sweetalert';
import Cookies from "js-cookie";

function Login() {
    const navigate = useNavigate();

    const [formValue, setformValue] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        axios
            .post("http://127.0.0.1:8000/api/login", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            })
            .then((response) => {
                const { name, token, id } = response.data.data;
                Cookies.set("isLoggedIn", true);
                Cookies.set("username", name);
                Cookies.set("token", token);
                Cookies.set('user_id', id);
                navigate("/home");
                swal("Iniciaste Sesión", "¡Haz iniciado sesión!", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Card
                style={{ width: "30rem", marginTop: "50px" }}
                className="mx-auto"
            >
                <Card.Body>
                    <Card.Title className="text-center">
                        <img src="" />
                    </Card.Title>
                    <Card.Title className="text-center" style={{ color: "black", fontSize: "18px" }}>
                        INGRESA TU CORREO ELECTRÓNICO PARA UNIRTE O INICIAR SESIÓN
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: "black", fontSize: "14px" }}>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Correo"
                                name="email"
                                value={formValue.email}
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "black", fontSize: "14px" }}>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                name="password"
                                value={formValue.password}
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Mantener sesión" style={{ color: "black", fontSize: "14px" }} />
                        </Form.Group>
                        <Button
                            style={{ width: "100%" }}
                            variant="primary"
                            type="submit"
                        >
                            INICIAR SESIÓN
                        </Button>
                        <Card.Text style={{ margin: "5px", color: "black", fontSize: "14px" }}>
                            ¿No eres miembro?
                            <Card.Link as={Link} to="/register" style={{ marginLeft: "5px" }}>
                                Únete
                            </Card.Link>
                        </Card.Text>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}

export default Login;
