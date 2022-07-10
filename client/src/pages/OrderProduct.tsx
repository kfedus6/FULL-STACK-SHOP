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
                    <span className='client-date'>{order.updatedAt}</span>
                    <span className='client-name'>{order.name}</span>
                    <span className='client-phone'>{order.phone}</span>
                    <div className='client-count-product'>
                        <span><h4>Замовлені Товари:</h4></span>
                        <span className='clinet-count'>{orderProduct.reduce((prev: any, count: any) => prev += +count.count, 0)}</span>
                    </div>
                    <div className='order-total-sum'>
                        <span><h3>Загальна сума:</h3></span>
                        <span className='order-client-sum'>{order.sum} &#8372;</span>
                    </div>
                    <div className='order-btn-status'>
                        <button className='order-accept'>Прийняти</button>
                        <button className='order-cancel'>Скасувати</button>
                    </div>
                </div>
                <div>
                    {orderProduct.map((item: any) => {
                        return (
                            <div key={item.id}>
                                <h1>product</h1>
                            </div>
                        )
                    })}
                </div>
            </div >
        </div >
    )
};

export default OrderProduct;