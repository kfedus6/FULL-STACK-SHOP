import React, { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const Order = () => {
    const { fetchGetOrders } = useAction()
    const { orders }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrders()
    }, [])

    return (
        <div className='orders'>
            <div>
                <h2 className='orders-title'>Замовлення клієнтів</h2>
            </div>
            <div className='orders-client-container'>
                <div className='orders-items'>
                    {orders.map((item: any) => {
                        let date = item.updatedAt.split('-')
                        let dateDay = date[2]
                        dateDay = dateDay.slice(0, 2)
                        let status;
                        if (item.status === false) {
                            status = "Скасовано"
                        } else if (item.status === true) {
                            status = "Виконано"
                        } else {
                            status = 'В обробці'
                        }
                        return (
                            <OrderItem key={item.id} item={item} date={date} dateDay={dateDay} status={status} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Order;