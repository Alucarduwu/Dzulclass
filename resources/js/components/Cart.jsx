import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Table, Button, Row, Col } from 'react-bootstrap';
import Cookies from "js-cookie";

function Cart() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = () => {
    axios
      .get('http://localhost:8000/api/cart', {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setPurchases(response.data.purchases);
      })
      //.catch((error) => {
        //console.log(error);
      //});
  };
  

  const removeFromCart = (purchaseId) => {
    axios
      .delete(`http://localhost:8000/api/cart/${purchaseId}`, {
        headers: {
          
        },
      })
      .then(() => {
        setPurchases((prevPurchases) =>
          prevPurchases.filter((purchase) => purchase.id !== purchaseId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Cart</h2>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td>
                    <img
                      src={purchase.product.image}
                      alt={purchase.product.name}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </td>
                  <td>{purchase.product.name}</td>
                  <td>{purchase.product.description}</td>
                  <td>{purchase.price}</td>
                  <td>
                    <Button onClick={() => removeFromCart(purchase.id)} variant="danger">
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      return (
    <div style={{ backgroundImage: `url("https://th.bing.com/th/id/R.026a81c711e9ae25239e89a9f48e4204?rik=4JNL8PHI6f3X1w&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f10%2f519%2f797%2fsad-dog-shar-pei-sad-lonely-cry-tears-animal-hd-1080P-wallpaper.jpg&ehk=cXo1h4OLzNz%2bJXaHI7%2fxEeb1g9B8glLAOr%2foEr5ernk%3d&risl=&pid=ImgRaw&r=0")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '3rem', color: 'white' }}>
      <p>Estamos mejorando la seguridad de transacción para que tu navegación aquí sea completa. Te agradecemos la espera.</p>
    </div>
  );
    </>
  );
}

export default Cart;
