import React, { useState, useEffect } from "react";
import { Container, Col, Row, Table, Form, Button, Modal, FloatingLabel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";




const Pedidos = () => {
    const location = useLocation();

    const [show, setShow] = useState(false);
    const [showAgregar, setShowAgregar] = useState(false);
    const [edit, setEdit] = useState(false);
    const clearData = () => {
        data.id = '';
        data.name= '';
        data.image = '';
        data.price='';
        data.stock = '';
        data.tipo = '';
        setDataProducto({
            name: '',
            price: '',
            description: ''
        })
    }
   

    const handleSubmitAgregar = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', data.id)
        formData.append('description', data.description)
        formData.append('image', data.image)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('tipo', data.tipo)
        const headers = {
            'Authorization': 'Bearer ' + location.state.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        };

        axios.post(
            "http://127.0.0.1:8000/api/productCreate", formData, { headers }
        ).then(response => {
            if (response.data.missing == "true") {
                swal({
                    title: "Nuevo pedido",
                    text: "Los campos están vacíos, verifique e ingrese los campos.",
                    icon: 'warning',
                });
            }
            else {
                console.log(response.data);
                setTabla(response.data);
                swal({
                    title: "Nuevo pedido",
                    text: "Se guardo correctamente.",
                    icon: 'success',
                });
                setShowAgregar(false);
            }
        }).catch(error => {
            console.log(error);
        });
    }
    
    const handleSubmitUpdateAgregar = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', data.id)
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('image', data.image)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('tipo', data.tipo)
        const headers = {
            'Authorization': 'Bearer ' + location.state.token,
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        };

        axios.post(
            "http://127.0.0.1:8000/api/edit/{id}", formData, { headers }
        ).then(response => {
            if (response.data.missing == "true") {
                swal({
                    title: "Actualización pedido",
                    text: "Algunos campos están vacíos, verifique e ingrese los campos.",
                    icon: 'warning',
                });
            }
            else {
                console.log(response.data);
                setTabla(response.data);
                swal({
                    title: "Actualización",
                    text: "Se guardo correctamente.",
                    icon: 'success',
                });
                setShowAgregar(false);
            }
        }).catch(error => {
            console.log(error);
        });
    }
    const Buttons = (props) => {
        const actualizar = () => {
            data.producto_id = props.producto_id;
            data.cantidad = props.cantidad;
            let formData = new FormData();
            formData.append('id', props.producto_id);
            const headers = {
                'Authorization': 'Bearer ' + location.state.token,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            };

            axios.post(
                "http://127.0.0.1:8000/api/destroy/{id}", formData, { headers }
            ).then((response) => {
                console.log(response.data);
                dataProducto.name = response.data[0]["name"];
                dataProducto.price = response.data[0]["price"];
                dataProducto.dtock= response.data[0]["stock"];
                setShowAgregar(true);
            })
        }
        const borrar = () => {
            swal({
                title: "¿Estás seguro?",
                text: "Una vez borrado, ya no podrás recuperar el registro",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((response) => {
                if (response) {
                    let formData = new FormData();
                    formData.append('producto_id', props.producto_id)
                    const headers = {
                        'Authorization': 'Bearer ' + location.state.token,
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    };

                    axios.post(
                        "hhttp://127.0.0.1:8000/api/destroy/{id}", formData, { headers }
                    ).then((responseDelete) => {
                        swal("Se borro satisfactoriamente.", {
                            icon: "success",
                        });
                        setTabla(responseDelete.data)
                    })
                }
            });
        }
        return (
            <>
                <Button variant="outline-danger" className="btn-outline-danger" onClick={borrar}>Eliminar</Button>{' '}
                <Button variant="outline-primary" className="btn-outline-primary"
                    onClick={() => {
                        actualizar();
                        setEdit(true);
                    }}
                >
                    Editar
                </Button>{' '}
            </>
        )
    }
    const ButtonsProductos = (props) => {
        const agregar = () => {
            dataProducto.name = props.name
            data.id = props.id;
           data.descripcion= props.description;
           data.image= props.image;
           data.price= props.price;
           data.stock=props.stock;
           data.tipo= props.tipo;
          
        }
        return (
            <>
                <Button variant="outline-success" className="btn-outline-success" onClick={() => { setShowAgregar(true); agregar(); }}>Agregar Producto</Button>{' '}
            </>
        )
    }
    const handleInputChange = (e) => {
        e.persist();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const ButtonSaveAgregar = () => {
        if (!edit) {
            return (
                <Button variant="primary" onClick={handleSubmitAgregar}>
                    Guardar
                </Button>
            )
        }
        else {
            return (
                <Button variant="secondary" onClick={handleSubmitUpdateAgregar}>
                    Actualizar
                </Button>
            )
        }
    }
    useEffect(() => {
        const getData = async () => {
            let formData = new FormData();
            formData.append('id', data.consultora_id)
            const headers = {
                'Authorization': 'Bearer ' + location.state.token,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            };
            axios.post("http://127.0.0.1:8000/api/product", formData, { headers }
            ).then((response) =>{
                console.log(response.data);
                setTabla(response.data);
            })
        }
        const getDataProductos = async () => {
            const headers = {
                'Authorization': 'Bearer ' + location.state.token,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            };
            const response = await axios.get("http://127.0.0.1:8000/api/product", { headers })
            setTablaProductos(response.data);
        }
        const getDataInformation = async () => {
            let formData = new FormData();
            formData.append('email', location.state.email)
            const headers = {
                'Authorization': 'Bearer ' + location.state.token,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            };
            
           

        }
        getDataInformation();
        getDataProductos();
    }, [])
    return (
        <>
            <NavigationDashboard />
            <Modal show={showAgregar} onHide={() => setShowAgregar(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Form>
                            <Form.Group className="mb-3" controlId="formDataProducto">
                                <Row>
                                    <Col>
                                        <Form.Label>Nombre del producto:</Form.Label>
                                        <Form.Control type="text" name="nombre_producto" defaultValue={dataProducto.name} disabled />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label>Cantidad*:</Form.Label>
                                        <Form.Control type="text" name="cantidad" defaultValue={data.cantidad} onChange={handleInputChange} placeholder="0" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <ButtonSaveAgregar />
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre del producto</th>
                                    <th>Precio para consultora</th>
                                    <th>Precio de venta</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                        <tbody>
                                {tablaProductos.map(dataItem => (
                                    <tr key={dataItem.id}>
                                        
                                        <td>{dataItem.name}</td>
                                        <td>${dataItem.price}</td>
                                        <td>${dataItem.image}</td>
                                        <td>${dataItem.stock}</td>
                                        <td>${dataItem.descripcion}</td>
                                        <td>${dataItem.tipo}</td>
                                        <td>
                                            <ButtonsProductos
                                                id={dataItem.id}
                                                name={dataItem.name}
                                                price={dataItem.price}
                                                image={dataItem.image}
                                                descripcion={dataItem.descripcion}
                                                stock={dataItem.stock}
                                                tipo={dataItem.tipo}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </Modal.Body>
            </Modal>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12} className="col-profile">
                        <h1 className="h1-title-sections">Pedidos</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={3}>
                        <Button variant="success" onClick={() => { setShow(true); setEdit(false); clearData(); }}>Nuevo pedido</Button>
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}
export default Pedidos;