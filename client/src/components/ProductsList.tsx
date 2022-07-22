import React, { FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { useAction } from '../hook/useAction';
import jwt_decode from "jwt-decode";
import { AiTwotoneDelete } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const ProductsList = ({ item, inBasket }: any) => {
    const { t } = useTranslation()
    const { fetchAddBasketProduct } = useAction();

    const { user } = useTypedSelector(state => state)

    const product = (e: FormEvent) => {
        e.preventDefault()
    }

    const addBasketProduct = (productId: any) => {
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        fetchAddBasketProduct(user.userId, productId)
    }

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <div className='block__price-btn'>
                        <span className='products__price'>{item.price} &#8372;</span>
                        <button className='btn__buy' onClick={product}>{t('products.buy')}</button>
                    </div>
                </div>
            </div>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <span className='products__price'>{item.price} &#8372;</span>
                    <div className='block__btn-basket'>
                        <button className='btn__buy' onClick={product}>{t('products.buy')}</button>
                        <button className={inBasket ? 'btn__basket selected' : 'btn__basket'} onClick={() => addBasketProduct(item.id)}><RiShoppingBasketFill /></button>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img category' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <span className='products__price'>{item.price} &#8372;</span>
                    <div className='block__btn-basket'>
                        <div>
                            <button className='btn__buy' onClick={product}>{t('products.buy')}</button>
                        </div>
                        <div>
                            <button className='btn-delete-product'><AiTwotoneDelete /></button>
                            <button className={inBasket ? 'btn__basket selected' : 'btn__basket'} onClick={() => addBasketProduct(item.id)}><RiShoppingBasketFill /></button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};

export default ProductsList;