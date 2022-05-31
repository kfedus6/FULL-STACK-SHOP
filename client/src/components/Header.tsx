import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Головна</NavLink>
            <NavLink to="/products">Всі товари</NavLink>
            <NavLink to="/authorization">Авторизація</NavLink>
        </div>
    );
};

export default Header;