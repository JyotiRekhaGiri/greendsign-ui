import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
import logo from "../images/Group3@2x.png";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        const emailValue = document.getElementById('exampleInputEmail1').value.trim();
        const passwordValue = document.getElementById('exampleInputPassword1').value.trim();

        // For demonstration purposes, assume login is successful
        const isAuthenticated = true;

        if (isAuthenticated) {
            // Redirect to /dashboard page
            navigate('/dashboard');
        } else {
            // Handle unsuccessful login
            // For example, display error message
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className=''>
            <div className='d-flex justify-content-center align-items-center'>

                <form className='login'>
                    <div style={{ margin: "2rem" }}>
                        <img src={logo} alt='logo' />
                    </div>
                    <div style={{ margin: "2rem", fontSize: "18px", fontWeight: "100" }}>
                        <label type="text">#We are Electric</label>
                    </div>
                    <div className="mb-3" style={{ margin: "2rem" }}>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail' />
                    </div>
                    <div className="mb-3" style={{ margin: "2rem" }}>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div style={{ margin: "2rem" }} >
                        <button type="submit" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                    <div>
                        <label type="text">Forgot Password?</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


{/* <Link >
                <img src={ logo } classNameName='logoImage' alt='logo'/>
                </Link>
                <input /> */}

