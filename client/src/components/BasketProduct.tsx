import React, { Key, useEffect, useMemo, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import '../styles/basketProduct.css';
import ModalBuy from './UI/modal/ModalBuy';

interface itemProduct {
    id: number,
    name: string,
    price: string,
    img: string
}

interface itemBasketInfo {
    count: number,
    product: { id: number, name: string, price: string }
    sum: number
}

const BasketProduct = () => {
    const [basketProductsInfo, setBasketProductsInfo]: any = useState([])
    const [visibleBuy, setVisibleBuy] = useState(false)
    const { basket }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state)
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
        let tmp = basketProductsInfo
        for (const product of basket) {
            tmp = [...tmp, { product: product, count: 1, sum: product.price }]
        }
        setBasketProductsInfo(tmp)
    }, [])


    const deleteProduct = (id: any) => {
        fetchDeleteBasketProduct(id)
        /*  let newBasketProductInfo = basketProductsInfo.filter((item: any) => item.product.id !== id)
         setBasketProductsInfo(newBasketProductInfo) */
    }

    const goShop = () => {
        navigate('/products')
    }

    const changeBasketIndo = (count: any, basketInfo: any) => {
        let tmp = basketProductsInfo.filter((info: any) => info.product.name != basketInfo.product.name)
        basketInfo.count = count
        basketInfo.sum = count * basketInfo.product.price
        setBasketProductsInfo([...tmp, basketInfo])
    }

    const buyProduct = () => {
        setVisibleBuy(true)
    }


    const sendProduct = () => {
        setVisibleBuy(false)
    }

    console.log(basketProductsInfo.length, basket.length)
    console.log('basketProductInfo', basketProductsInfo)
    console.log('basket', basket)

    if (basket.length === 0) {
        return (
            <div className='cart-empty'>
                <h2>КОРЗИНА ДЛЯ ПОКУПОК</h2>
                <h3 className='empty'>КОРЗИНА ПУСТА</h3>
                <button onClick={goShop} className='btn-shop'>ПРОДОВЖИТИ ПОКУПКУ</button>
            </div>
        )
    } else if (basketProductsInfo.length === basket.length) {
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
                            const basketInfo = basketProductsInfo.find((info: itemBasketInfo) => info.product.name == item.name)
                            console.log('basketInfo', basketInfo)
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
                                        <input type="number" defaultValue={basketInfo.count} onChange={(e) => changeBasketIndo(e.target.value, basketInfo)} />
                                    </div>
                                    <div className='cart-product-total-price'>
                                        {basketInfo.sum} &#8372;
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
                                <button onClick={buyProduct} className='btn-cart-buy'>Купити</button>
                            </div>
                            <div className='btn-go-shop'>
                                <button onClick={goShop}><span><BsArrowLeft /></span>Продовжити покупку</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalBuy visibleBuy={visibleBuy} setVisibleBuy={setVisibleBuy}>
                    <div className='model-block'>
                        <h2>Замовлення</h2>
                        <div className='block-buy'>
                            <input type="text" placeholder='Name' />
                            <input type="tel" placeholder='Phone' />
                        </div>
                        <div className='block-buy-btn'>
                            <button onClick={sendProduct}>Купити</button>
                        </div>
                    </div>
                </ModalBuy>
            </div >
        )
    } else {
        return <h1>loaded</h1>
    }
};

export default BasketProduct;