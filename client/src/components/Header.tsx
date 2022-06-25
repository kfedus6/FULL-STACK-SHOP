import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import Exit from '../pages/Exit';
import '../styles/header.css';

const Header: React.FC = () => {

    const user = useTypedSelector(state => state.user)

    if (user.is_login === false && user.is_admin === false) {
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <label>Shop</label>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                    <li><NavLink to="/authorization">Авторизація</NavLink></li>
                </ul>
            </nav>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <label>Shop</label>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                    <li><Exit /></li>
                </ul>
            </nav>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <label>Shop</label>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                    <li><NavLink to="/adminPanel">Адмін панель</NavLink></li>
                    <li><Exit /></li>
                </ul>
            </nav>
        )
    }
    return <h1>ewq</h1>
};

export default Header;