import React from 'react';
import './Heder.css'
import Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user,logOut} = useAuth();
    return (
        <div className='header'>
            <NavLink to="/shop">
                <img className='logo' src={Logo} alt="My Shop logo" />
            </NavLink>
            
            <nav>
                <NavLink  to="/shop">Shop</NavLink>
                <NavLink  to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email && <span style={{color:"white"}}>Hi! {user.displayName} </span>}
                
                {
                    user.email ? 
                        
                    <button onClick={logOut}>LogOut</button>
                    :
                        <NavLink to="/login">Login</NavLink>
                    
                }
            </nav>
            
        </div>
    );
};

export default Header;