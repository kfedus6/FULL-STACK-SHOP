import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const OrderProduct = () => {
    const { id } = useParams()

    const { fetchGetOrderProduct, fetchGetOrder } = useAction()
    const { orderProduct, order }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrder(id)
        fetchGetOrderProduct(id)
    }, [])

    return (
        <div className='order'>
            <div>
                <h2>Замовлення клієнта</h2>
            </div>
            <div className='order-container'>
                <div className='order-client'>
                    <span>{order.updatedAt}</span>
                    <span className='clietn-name'>{order.name}</span>
                    <span className='client-phone'>{order.phone}</span>
                    <div className='order-total-sum'>
                        <span><h4>Загальна сума:</h4></span>
                        <span className='order-client-sum'>{order.sum} &#8372;</span>
                    </div>
                    <div className='order-btn-status'>
                        <button className='order-accept'>Прийняти</button>
                        <button className='order-cancel'>Скасувати</button>
                    </div>
                </div>
                <div>
                    <h1>product</h1>
                </div>
            </div >
        </div >
    )
};

export default OrderProduct;