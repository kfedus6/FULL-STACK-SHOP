import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import Exit from '../pages/Exit';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAction } from '../hook/useAction';
import jwt_decode from 'jwt-decode';

const Header: React.FC = () => {

    const { fetchGetBasketProduct } = useAction()
    const user = useTypedSelector(state => state.user)
    const { basket }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        if (user.is_login == true) {
            let token: any = localStorage.getItem('token')
            let user: any = jwt_decode(token)
            fetchGetBasketProduct(user.userId)
        }
    }, [user])

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <button onClick={goHome}>Shop</button>
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
                    <button onClick={goHome}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                    <li><Exit /></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
            </div>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <button onClick={goHome}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/products">Всі товари</NavLink></li>
                    <li><NavLink to="/category">Категорії</NavLink></li>
                    <li><NavLink to="/newProduct">Новинки</NavLink></li>
                    <li><NavLink to="/adminPanel">Адмін панель</NavLink>
                        <ul><li><NavLink to="/order">Замовлення</NavLink></li></ul>
                    </li>
                    <li><Exit /></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
            </div>
        )
    }
    return <h1>ewq</h1>
};

export default Header;
