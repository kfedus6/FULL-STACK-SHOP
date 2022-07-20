import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import Exit from '../pages/Exit';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { useAction } from '../hook/useAction';
import jwt_decode from 'jwt-decode';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const navigate = useNavigate()

    const { fetchGetBasketProduct } = useAction()

    const { basket }: any = useTypedSelector(state => state.products)
    const user = useTypedSelector(state => state.user)

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

    useEffect(() => {
        if (user.is_login == true) {
            let token: any = localStorage.getItem('token')
            let user: any = jwt_decode(token)
            fetchGetBasketProduct(user.userId)
        }
    }, [user])

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <button onClick={() => navigate('/')}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li className='link-home'><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li className='link-products'><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li className='link-category'><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li className='link-news'><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                </ul>
                <div className='nav-icons-leng'>
                    <NavLink className='bx user' to="/authorization"><FaUser /></NavLink>
                    <div className='block-lang'>
                        <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                            <option className='option' hidden>{language()}</option>
                            <option className='option' value='EN'>EN</option>
                            <option className='option' value='UA'>UA</option>
                        </select>
                    </div>
                </div>
            </div >
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <button onClick={() => navigate('/')}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li className='link-home'><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li className='link-products'><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li className='link-category'><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li className='link-news'><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                    <li className='link-exit'><Exit /></li>
                </ul>
                <div className='nav-icons-leng'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <div className='block-lang'>
                        <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                            <option className='option' hidden>{language()}</option>
                            <option className='option' value='EN'>EN</option>
                            <option className='option' value='UA'>UA</option>
                        </select>
                    </div>
                </div>
            </div >
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <div className='navbar nav-container'>
                <div className='logo'>
                    <button onClick={() => navigate('/')}>Shop</button>
                </div>
                <ul className='navbar__links'>
                    <li className='link-home'><NavLink to="/">{t('header.home')}</NavLink></li>
                    <li className='link-products'><NavLink to="/products">{t('header.allproducts')}</NavLink></li>
                    <li className='link-category'><NavLink to="/category">{t('header.categories')}</NavLink></li>
                    <li className='link-news'><NavLink to="/newProduct">{t('header.news')}</NavLink></li>
                    <div className="dropdown">
                        <div className="dropbtn">{t('header.adminpanel')}</div>
                        <ul className="dropdown-content">
                            <li><NavLink to="/adminPanel">{t('header.create')}</NavLink></li>
                            <li><NavLink to="/order">{t('header.orders')}</NavLink></li>
                            <li><NavLink to="/statistics">{t('header.statistics')}</NavLink></li>
                        </ul>
                    </div>
                    <li className='link-exit'><Exit /></li>
                </ul>
                <div className='nav-icons-leng'>
                    <NavLink to="/basketProduct" className='cart'><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                    <div className='block-lang'>
                        <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                            <option className='option' hidden>{language()}</option>
                            <option className='option' value='EN'>EN</option>
                            <option className='option' value='UA'>UA</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    return <h1>ewq</h1>
};

export default Header;
