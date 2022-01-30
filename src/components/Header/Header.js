import React from 'react';
import './Heder.css'
import Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/shop">
                <img className='logo' src={Logo} alt="My Shop logo" />
            </NavLink>
            
            <nav>
                <NavLink  to="/shop">Shop</NavLink>
                <NavLink  to="/order">Order Review</NavLink>
                <NavLink  to="/inventory">Manage Inventory</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;