import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CarouselFade from './CarouselFade';

function Home() {
    return (
        <>
            <style type="text/css">
                {`
                    .section {
                        margin-top: 50px;
                        padding: 20px;
                    }

                    .custom-card {
                        border: none;
                        overflow: hidden;
                        position: relative;
                        margin-bottom: 20px;
                    }

                    .custom-card img {
                        transition: transform 0.3s ease;
                        width: 100%;
                        height: 600px; /* 200% de la altura original de 300px */
                        object-fit: contain; /* Asegura que la imagen completa se vea */
                    }

                    .custom-card:hover img {
                        transform: scale(1.05);
                    }

                    .card-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        color: white;
                        background: rgba(0, 0, 0, 0.5);
                        padding: 20px;
                        border-radius: 10px;
                    }

                    .card-overlay .btn {
                        margin-top: 10px;
                    }

                    .custom-card-body {
                        text-align: center;
                    }
                `}
            </style>

            <div className="position-relative">
                <CarouselFade />
            </div>

            <div className="section">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://thumbs.dreamstime.com/b/smoke-shop-vector-emblem-lighter-smoke-shop-vector-emblem-vintage-style-lighter-cigarette-background-152748815.jpg"
                            />
                            <div className="card-overlay">
                                <Card.Text>Lo nuevo en artículos para fumar</Card.Text>
                                <Card.Title>Creatividad que conecta con la habilidad</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://th.bing.com/th/id/OIP.16IGXZe-L4sMUaLkkC4H9QHaH6?rs=1&pid=ImgDetMain"
                            />
                            <div className="card-overlay">
                                <Card.Text>Cuidando y amando</Card.Text>
                                <Card.Title>Los mejores suplementos para tu cuidado</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="section">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://smokea.com/cdn/shop/files/torch-3-5g-thca-live-resin-diamonds-cartridge-grape-stomper-30613436170342_400x.jpg?v=1714587884" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>TORCH 3.5G THCA LIVE RESIN DIAMONDS CARTRIDGE - GRAPE STOMPER</Card.Title>
                                <Card.Text>VapeThc</Card.Text>
                                <Card.Text>$1,599</Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://smokea.com/cdn/shop/files/delta-beverages-delta-light-cannabis-seltzer-squeeze-of-lime-30568457732198_400x.jpg?v=1714067504" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>DELTA BEVERAGES DELTA LIGHT CANNABIS SELTZER - SQUEEZE OF LIME</Card.Title>
                                <Card.Text>Bebida with 5mg thc</Card.Text>
                                <Card.Text>$150</Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img variant="top" src="https://smokea.com/cdn/shop/products/top-shelf-hemp-200mg-delta-8-craft-gummies-wild-berry-29172275904614_400x.jpg?v=1662739243" />
                            <Card.Body className="custom-card-body">
                                <Card.Title>TOP SHELF HEMP 200MG DELTA 8 CRAFT GUMMIES - WILD BERRY</Card.Title>
                                <Card.Text>Gomitas espaciales</Card.Text>
                                <Card.Text>$999</Card.Text>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="section">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://static.wixstatic.com/media/03a140_3ad8eb5f68d14390b51137815ea8360e~mv2.jpg/v1/fill/w_625,h_625,al_c,lg_1,q_85,enc_auto/03a140_3ad8eb5f68d14390b51137815ea8360e~mv2.jpg"
                            />
                            <div className="card-overlay">
                                <Card.Text>Descubre lo nuevo</Card.Text>
                                <Card.Title>Todo tipo de suplementación</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://supernaturista.com/cdn/shop/products/37355_debda388-6a28-4cd3-b5b6-93bb8858ae5c.jpg?v=1665227290&width=832"
                            />
                            <div className="card-overlay">
                                <Card.Text>AYUDA EN TU RUTINA</Card.Text>
                                <Card.Title>Creatina monohidratada 5mg</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="section">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://static.wixstatic.com/media/03a140_2b76024f7bdf483a8e3b4d7baf505547~mv2.jpeg/v1/fill/w_1080,h_591,al_c,q_85,enc_auto/03a140_2b76024f7bdf483a8e3b4d7baf505547~mv2.jpeg"
                            />
                            <div className="card-overlay">
                                <Card.Title>Suplementación</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://supernaturista.com/cdn/shop/products/28670A_bb6ccd80-9d69-4e34-a485-a339338886c5.jpg?v=1633875815&width=832"
                            />
                            <div className="card-overlay">
                                <Card.Title>Alimentación</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="https://smokea.com/cdn/shop/files/cookies-2g-delta-8-cali-infused-preroll-georgia-pie-30087149027430_400x.jpg?v=1707247302"
                            />
                            <div className="card-overlay">
                                <Card.Title>Smoke</Card.Title>
                                <Button href= "https://wa.me/524492238799" variant="primary" style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => handleBuy(product.id)}>PARA HACER UN PEDIDO ESCRIBENOS AL SIGUIENTE ENLACE DE WSP: https://wa.me/524492238799</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            <Footer />
        </>
    );
}

export default Home;
