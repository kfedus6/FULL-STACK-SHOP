import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import Exit from '../pages/Exit';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAction } from '../hook/useAction';
import jwt_decode from 'jwt-decode';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
    }

    const language = () => {
        const languageLetters = localStorage.getItem('i18nextLng')
        if (languageLetters) {
            return languageLetters
        }
        return 'EN'
    }

    const navigate = useNavigate()
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
                    <li><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink className='bx user' to="/authorization"><FaUser /></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
                <div>
                    <select onChange={(event) => changeLanguage(event)}>
                        <option hidden>{language()}</option>
                        <option value='EN'>EN</option>
                        <option value='UA'>UA</option>
                    </select>
                </div>
            </div >
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div className='navbar nav-conteiner'>
                <div className='logo'>
                    <button onClick={goHome}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                    <li><Exit /></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
                <div>
                    <select onChange={(event) => changeLanguage(event)}>
                        <option hidden>{language()}</option>
                        <option value='EN'>EN</option>
                        <option value='UA'>UA</option>
                    </select>
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
                    <li><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                    <li><NavLink to="/adminPanel">{t('header.adminpanel')}</NavLink>
                        <ul><li><NavLink to="/order">{t('header.orders')}</NavLink></li></ul>
                    </li>
                    <li><Exit /></li>
                </ul>
                <div className='nav-icons'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <i className='bx menu' id='menu-icon'><AiOutlineMenu /></i>
                </div>
                <div>
                    <select onChange={(event) => changeLanguage(event)}>
                        <option hidden>{language()}</option>
                        <option value='EN'>EN</option>
                        <option value='UA'>UA</option>
                    </select>
                </div>
            </div>
        )
    }
    return <h1>ewq</h1>
};

export default Header;
