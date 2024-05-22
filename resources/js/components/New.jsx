import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import CarouselFade from './CarouselFade';
import Footer from "./Footer";

function Home() {
    return (
        <>
            <style type="text/css">
                {`
                    .section {
                        margin-top: 30px;
                        padding: 20px;
                    }

                    .custom-card {
                        border: none;
                        overflow: hidden;
                        position: relative;
                        margin: 15px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        transition: transform 0.2s ease-in-out;
                    }

                    .custom-card:hover {
                        transform: translateY(-10px);
                    }

                    .custom-card img {
                        transition: transform 0.3s ease;
                        width: 100%;
                        height: 400px; /* Ajuste de altura para que las imágenes sean más grandes */
                        object-fit: contain; /* Asegura que la imagen completa se vea */
                    }

                    .custom-card-body {
                        text-align: center;
                    }

                    .custom-button {
                        margin-top: 10px;
                    }
                `}
            </style>

            <div>
                <CarouselFade />
            </div>

            <div className="section">
                <Row xs={1} md={3} className="g-4 mx-auto">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://smokea.com/cdn/shop/products/smokea-15-glass-bubbler-pipe-13594599620710_400x.jpg?v=1628376002" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>Smoke</Card.Title>
                                <Card.Text>
                                    SMOKEA $15 GLASS BUBBLER PIPE
                                </Card.Text>
                                <Card.Text>
                                    $800
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://smokea.com/cdn/shop/products/headway-12-lazy-boy-acrylic-bong-clearance-teal-28337754112102_400x.jpg?v=1628453747" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>Smoke</Card.Title>
                                <Card.Text>
                                    HEADWAY 12" LAZY BOY ACRYLIC BONG
                                </Card.Text>
                                <Card.Text>
                                    $1,299
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1752/6725/products/ryot-large-acrylic-magnetic-taster-box-dugout-w-one-hitter-blue-28330354475110_360x.jpg?v=1628381393" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>Smoke</Card.Title>
                                <Card.Text>
                                    SMOKEA 9MM STANDARD GLASS REPLACEMENT SLIDE
                                </Card.Text>
                                <Card.Text>
                                    $999
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row xs={1} md={3} className="g-4 mx-auto">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://gnc.com.mx/media/nextgenimages//100107007_a.webp" />
                            <Card.Body className="custom-card-body">
                                <Card.Text>
                                    Aceite de Salmón 1000 mg GNC 180 Cápsulas
                                </Card.Text>
                                <Card.Text>
                                    $849
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://gnc.com.mx/media/catalog/product/1/0/100109082_b.jpg?width=560&height=560&canvas=560,560&optimize=medium&bg-color=255,255,255&fit=bounds" />
                            <Card.Body className="custom-card-body">
                                <Card.Text>
                                    M 250 Magnesio 250 mg GNC 90 Tabletas
                                </Card.Text>
                                <Card.Text>
                                    $499
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://gnc.com.mx/media/nextgenimages//106306004_a.webp" />
                            <Card.Body className="custom-card-body">
                                <Card.Text>
                                    Proteina chocolate
                                </Card.Text>
                                <Card.Text>
                                    $1,549
                                </Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <Footer />
        </>
    );
}

export default Home;
