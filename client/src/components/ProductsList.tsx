import React, { FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { useAction } from '../hook/useAction';
import jwt_decode from "jwt-decode";


const ProductsList = ({ item, inBasket }: any) => {

    const { fetchAddBasket } = useAction();

    const { is_login } = useTypedSelector(state => state.user)

    const product = (e: FormEvent) => {
        e.preventDefault()
    }

    const addBasketProduct = (productId: any) => {
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        fetchAddBasket(user.userId, productId)
    }

    if (is_login === false) {
        return (
            <div key={item.id} className='product__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='product__name'>{item.name}</div>
                    <div className='block__price-btn'>
                        <span className='product__price'>{item.price} &#8372;</span>
                        <button className='btn__buy' onClick={product}>Купити</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div key={item.id} className='product__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='product__name'>{item.name}</div>
                    <span className='product__price'>{item.price} &#8372;</span>
                    <div className='block__btn-basket'>
                        <button className='btn__buy' onClick={product}>Купити</button>
                        <button className={inBasket ? 'btn__basket selected' : 'btn__basket'} onClick={() => addBasketProduct(item.id)}><RiShoppingBasketFill /></button>
                    </div>
                </div>
            </div >
        )
    }
};

export default ProductsList;