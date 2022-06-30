import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import jwt_decode from 'jwt-decode';
import '../styles/basketProduct.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface itemProduct {
    id: number,
    name: string,
    price: string,
    img: string
}

const BasketProduct = () => {

    const { fetchGetBasketProduct, fetchDeleteBasketProduct } = useAction()

    const { basket }: any = useTypedSelector(state => state.products)


    const { user }: any = useTypedSelector(state => state);
    const navigate = useNavigate();

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

    return (
        <div className='section-cart'>
            <div className='cart-conteiner'>
                <div className='cart-title'>
                    <h2>КОРЗИНА ДЛЯ ПОКУПОК</h2>
                </div>
                <div className='block-description'>
                    <span className='description-product'>ОПИС ПРОДУКТУ</span>
                    <span className='count-product'>ЧИСЛО</span>
                    <span className='price-product'>ЦІНА</span>
                </div>
                <div className='block-products'>
                    {basket.map((item: itemProduct) => {
                        return (
                            <div className='cart-product' key={item.id}>
                                <img className='img__cart-product' src={process.env.REACT_APP_API_URL + item.img} />
                                <span className='name__cart-product'>{item.name}</span>
                                <span className='price__cart-product'>{item.price}</span>
                                <button onClick={() => deleteProduct(item.id)}><AiTwotoneDelete /></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default BasketProduct;