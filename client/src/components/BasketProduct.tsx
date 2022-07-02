import React, { Key, useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import '../styles/basketProduct.css';

interface itemProduct {
    id: number,
    name: string,
    price: string,
    img: string
}

const BasketProduct = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { basket }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state);
    const navigate = useNavigate();

    const { fetchGetBasketProduct, fetchDeleteBasketProduct } = useAction()

    useEffect(() => {
        if (user.is_login === false) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        fetchGetBasketProduct(user.userId)
    }, [])

    const deleteProduct = (id: any) => {
        fetchDeleteBasketProduct(id)
    }

    const goShop = () => {
        navigate('/products')
    }

    const countPrice = (value: any) => {
        setTotalPrice(value)
    }

    if (basket.length === 0) {
        return (
            <div className='cart-empty'>
                <h2>КОРЗИНА ДЛЯ ПОКУПОК</h2>
                <h3 className='empty'>КОРЗИНА ПУСТА</h3>
                <button onClick={goShop} className='btn-shop'>ПРОДОВЖИТИ ПОКУПКУ</button>
            </div>
        )
    } else {
        return (
            <div className='cart-container'>
                <h2>КОРЗИНА ДЛЯ ПОКУПОК</h2>
                <div>
                    <div className='titles'>
                        <h3 className="product-title">Продукт</h3>
                        <h3 className="price">Ціна</h3>
                        <h3 className="quantity">Кількість</h3>
                        <h3 className="total">Всього</h3>
                    </div>
                    <div className='cart-items'>
                        {basket.map((item: itemProduct, idx: Key) => {
                            return (
                                <div className='cart-item' key={idx}>
                                    <div className='cart-product'>
                                        <img src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <button onClick={() => deleteProduct(item.id)}><AiTwotoneDelete /></button>
                                        </div>
                                    </div>
                                    <div className='cart-product-price' >{item.price} &#8372;</div>
                                    <div className="cart-product-quantity">
                                        <input type="number" defaultValue='1' onChange={(e) => countPrice(e.target.value)} />
                                    </div>
                                    <div className='cart-product-total-price'>
                                        {totalPrice * Number(item.price)} &#8372;
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-summary'>
                        <div className="cart-checkout">
                            <div className='subtotal'>
                                <span>Ціна</span>
                                <span className='amount'>price &#8372;</span>
                            </div>
                            <div>
                                <button className='btn-cart-buy'>Купити</button>
                            </div>
                            <div className='btn-go-shop'>
                                <button onClick={goShop}><span><BsArrowLeft /></span>Продовжити покупку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};

export default BasketProduct;