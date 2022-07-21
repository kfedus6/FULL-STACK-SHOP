import React, { Key, useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import ModalFormBuy from './UI/modalFormBuy/ModalFormBuy';
import { useTranslation } from 'react-i18next';

import '../styles/basketProduct.css';

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
    const { t } = useTranslation()
    const [basketProductsInfo, setBasketProductsInfo]: any = useState([])
    const [visibleBuy, setVisibleBuy] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate();

    const { fetchGetBasketProduct, fetchDeleteBasketProduct, fetchAddOrderProduct, fetchDeleteBasketProducts } = useAction()
    const { basket }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state)

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
        let newBasketProductInfo = basketProductsInfo.filter((item: any) => item.product.id !== id)
        setBasketProductsInfo(newBasketProductInfo)
    }

    const goShop = () => {
        navigate('/products')
    }

    const changeBasketIndo = (count: any, basketInfo: any) => {
        let tmp = basketProductsInfo.filter((info: any) => info.product.name !== basketInfo.product.name)
        basketInfo.count = count
        basketInfo.sum = count * basketInfo.product.price
        setBasketProductsInfo([...tmp, basketInfo])
    }

    const buyProduct = () => {
        setVisibleBuy(true)
    }

    const sendProduct = () => {
        setVisibleBuy(false)
        let token: any = localStorage.getItem('token')
        let user: any = jwt_decode(token)
        let sum = basketProductsInfo.reduce((prev: any, info: any) => prev += info.sum, 0)
        let products = basketProductsInfo.map((item: any) => item)
        const order = { userId: user.userId, name: name, phone: phone, sum: sum, products: products }
        setName('')
        setPhone('')
        fetchAddOrderProduct(order)
        fetchDeleteBasketProducts(user.userId)
    }

    if (basket.length === 0) {
        return (
            <div className='cart-empty'>
                <h2>{t('basketproducts.title')}</h2>
                <h3 className='empty'>{t('basketproducts.title_empty')}</h3>
                <button onClick={goShop} className='btn-shop'>{t('basketproducts.goshop')}</button>
            </div>
        )
    } else if (basketProductsInfo.length === basket.length) {
        return (
            <div className='cart-container'>
                <h2>{t('basketproducts.title')}</h2>
                <div>
                    <div className='titles'>
                        <h3 className="product-title">{t('basketproducts.title_product')}</h3>
                        <h3 className="price">{t('basketproducts.title_price')}</h3>
                        <h3 className="quantity">{t('basketproducts.title_quantity')}</h3>
                        <h3 className="total">{t('basketproducts.title_total')}</h3>
                    </div>
                    <div className='cart-items'>
                        {basket.map((item: itemProduct, idx: Key) => {
                            const basketInfo = basketProductsInfo.find((info: itemBasketInfo) => info.product.name === item.name)
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
                                <span>{t('basketproducts.title_price')}</span>
                                <span className='amount'>
                                    {basketProductsInfo.reduce((prev: any, info: any) => prev += info.sum, 0)}
                                    &#8372;</span>
                            </div>
                            <div>
                                <button onClick={buyProduct} className='btn-cart-buy'>{t('basketproducts.buy')}</button>
                            </div>
                            <div className='btn-go-shop'>
                                <button onClick={goShop}><span><BsArrowLeft /></span>{t('basketproducts.goshop')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalFormBuy visibleBuy={visibleBuy} setVisibleBuy={setVisibleBuy}>
                    <div className='model-block'>
                        <h2>{t('basketproducts.orders')}</h2>
                        <div className='block-buy'>
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='block-buy-btn'>
                            <button onClick={sendProduct}>{t('basketproducts.buy')}</button>
                        </div>
                    </div>
                </ModalFormBuy>
            </div >
        )
    } else {
        return <h1>loaded</h1>
    }
};

export default BasketProduct;