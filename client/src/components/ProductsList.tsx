import React, { FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import { RiShoppingBasketFill } from 'react-icons/ri';

interface itemProduct {
    item: {
        id: number,
        name: string,
        price: string,
        img: string
    }
};

const ProductsList = ({ item }: itemProduct) => {

    const { is_login } = useTypedSelector(state => state.user)

    const product = (e: FormEvent) => {
        e.preventDefault()
        console.log(item)
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
                        <button className='btn__basket'><RiShoppingBasketFill /></button>
                    </div>
                </div>
            </div>
        )
    }
};

export default ProductsList;