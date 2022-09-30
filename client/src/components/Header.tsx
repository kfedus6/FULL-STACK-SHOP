import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import { FaUser } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';
import { useAction } from '../hook/useAction';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const navigate = useNavigate()

    const { fetchGetBasketProduct, loginExit } = useAction()

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

    const exit = () => {
        loginExit()
    }

    useEffect(() => {
        if (user.is_login == true) {
            fetchGetBasketProduct()
        }
    }, [user])

    if (user.is_login === false && user.is_admin === false) {
        return (
            <nav className="navbar navbar-expand-lg bg-ligth">
                <div className="container-lg">
                    <button className="navbar-brand btn-logo" onClick={() => navigate('/')}>Shop</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav col-10 mb-2 mb-lg-0 justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">{t('header.home')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">{t('header.allproducts')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">{t('header.categories')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/newProduct">{t('header.news')}</NavLink>
                            </li>
                        </ul>
                        <div className='col-sm-2 col-md-1 col-lg-1'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='nav-item'>
                                    <NavLink className='nav-link fs-5' to="/authorization"><FaUser /></NavLink>
                                </li>
                                <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                                    <option className='option' hidden>{language()}</option>
                                    <option className='option' value='EN'>EN</option>
                                    <option className='option' value='UA'>UA</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <nav className="navbar navbar-expand-lg bg-ligth">
                <div className="container-lg">
                    <button className="navbar-brand btn-logo" onClick={() => navigate('/')}>Shop</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav col-10 mb-2 mb-lg-0 justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">{t('header.home')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">{t('header.allproducts')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">{t('header.categories')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/newProduct">{t('header.news')}</NavLink>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' onClick={exit}>{t('header.exit')}</a>
                            </li>
                        </ul>
                        <div className='col-sm-2 col-md-1 col-lg-1'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
                                <li className='nav-item'>
                                    <NavLink className='nav-link fs-4 link-dark' to="/basketProduct"><AiOutlineShopping /><i><span className='fs-6'>{basket.length}</span></i></NavLink>
                                </li>
                                <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                                    <option className='option' hidden>{language()}</option>
                                    <option className='option' value='EN'>EN</option>
                                    <option className='option' value='UA'>UA</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <nav className="navbar navbar-expand-lg bg-ligth">
                <div className="container-lg">
                    <button className="navbar-brand btn-logo" onClick={() => navigate('/')}>Shop</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav col-10 mb-2 mb-lg-0 justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">{t('header.home')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">{t('header.allproducts')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">{t('header.categories')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/newProduct">{t('header.news')}</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t('header.adminpanel')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/adminPanel">{t('header.create')}</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/order">{t('header.orders')}</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/statistics">{t('header.statistics')}</NavLink></li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' onClick={exit}>{t('header.exit')}</a>
                            </li>
                        </ul>
                        <div className='col-sm-2 col-md-1 col-lg-1'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between">
                                <li className='nav-item'>
                                    <NavLink className='nav-link cart' to="/basketProduct"><AiOutlineShopping /><i><span>{basket.length}</span></i></NavLink>
                                </li>
                                <select className='option-lang' onChange={(event) => changeLanguage(event)}>
                                    <option className='option' hidden>{language()}</option>
                                    <option className='option' value='EN'>EN</option>
                                    <option className='option' value='UA'>UA</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    return <h1>ewq</h1>
};

export default Header;
