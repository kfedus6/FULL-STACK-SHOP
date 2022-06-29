import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import Exit from '../pages/Exit';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Header: React.FC = () => {

    const user = useTypedSelector(state => state.user)

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <label>Shop</label >
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink className='bx user' to="/authorization"><FaUser /></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
            </div>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div className='navbar nav-conteiner'>
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
                <div className='nav-icons'>
                    <NavLink className='bx user' to="/authorization"><FaUser /></NavLink>
                    <a className='bx cart'><AiOutlineShopping /><i><span>0</span></i></a>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
            </div>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <div className='navbar nav-container'>
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
                <div className='nav-icons'>
                    <NavLink className='bx user' to="/authorization"><FaUser /></NavLink>
                    <a className='bx cart'><AiOutlineShopping /><i><span>0</span></i></a>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
            </div>
        )
    }
    return <h1>ewq</h1>
};

export default Header;