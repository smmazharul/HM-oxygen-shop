import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='register-from'>
            <div>
                <h2>Create Accout</h2>
                <form onSubmit="">

                    <input type="email" name='' id='' placeholder='Your Email' />
                    <br />
                    <input type="password" name='' id='' placeholder='Your Password' />
                    <br />
                    <input type="password" name='' id='' placeholder='Re-enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Acount?
                <Link to="/login" style={{textDecoration:"none"}}>
                   Login
            </Link>
                
                </p>
            </div>
        </div>
    );
};

export default Register;