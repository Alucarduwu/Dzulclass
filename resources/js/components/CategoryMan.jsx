import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import swal from 'sweetalert';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Footer from "./Footer";

function CategoryMan() {
    const category = 2;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`product/category/${category}`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);

    const handleBuy = (productId) => {
        axiosInstance
            .post(`cartCreate`, {
                product_id: productId,
                quantity: 1,
            })
            .then((response) => {
                console.log(response.data);
                swal("¡Agregado al carrito!", "El producto ha sido agregado al carrito", "success");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container" style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px" }}>
            <h2 className="text-center mt-4 mb-3" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>Suplementos Inyectables</h2>
            <Row xs={1} md={3} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className="p-3" style={{ backgroundColor: "#f8f9fa", border: "none", borderRadius: "15px" }}>
                            <Card.Img variant="top" src={product.image} style={{ borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#343a40" }}>{product.name}</Card.Title>
                                <Card.Text style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>{product.description}</Card.Text>
                                <Card.Text className="fw-bold" style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>Precio: ${product.price}</Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           
            <br />
            <Footer />
        </div>
    );
}

export default CategoryMan;
