import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <>
                <Navbar style={{ background: 'red', paddingTop: '20px', paddingBottom: '20px' }} expand="lg" className="justify-content-center">
                    <Navbar.Brand href="#home" style={{ color: 'white' }}> <img src="https://img.freepik.com/premium-vector/cute-funny-happy-weed-marijuana-leaf-character_92289-2078.jpg?w=2000" 
                    width="50" height="50" />All4Happy</Navbar.Brand>
                    <p style={{ color: 'white' }} className="text-center mt-4 mb-4">&copy; {(new Date().getFullYear())} Copyright: uwu </p>
                    <div className="redes-sociales">
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" alt="Instagram Icon" color='white'/>
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/26/000000/facebook--v1.png" alt="Facebook Icon" />
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/twitter--v1.png" alt="Twitter Icon" />
                        </a>
                    </div>
                </Navbar>
            </>
        </div>
    )
}

export default Footer;
