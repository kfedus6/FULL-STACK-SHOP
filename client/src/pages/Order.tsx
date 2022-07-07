import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const Order = () => {

    const { fetchGetOrderProduct, fetchGetOrder } = useAction()
    const { order, orderProduct, products }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrderProduct()
        fetchGetOrder()
    }, [])

    console.log('order', order)
    console.log('orderProduct', orderProduct)

    return (
        <div className='order-container'>
            <h2>Замовлення клієнтів</h2>
        </div>
    )
};

export default Order;