import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';

const Header: React.FC = () => {

    const user = useTypedSelector(state => state.user)
    console.log(user)

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/products">Всі товари</NavLink>
                <NavLink to="/category">Категорії</NavLink>
                <NavLink to="/newProduct">Новинки</NavLink>
                <NavLink to="/authorization">Авторизація</NavLink>
            </div>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/products">Всі товари</NavLink>
                <NavLink to="/category">Категорії</NavLink>
                <NavLink to="/newProduct">Новинки</NavLink>
                <NavLink to="/exit">Вийти</NavLink>
            </div>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <div>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/products">Всі товари</NavLink>
                <NavLink to="/category">Категорії</NavLink>
                <NavLink to="/newProduct">Новинки</NavLink>
                <NavLink to="/adminPanel">Адмін панель</NavLink>
                <NavLink to="/exit">Вийти</NavLink>
            </div>
        )
    }
    return <h1>ewq</h1>
};

export default Header;