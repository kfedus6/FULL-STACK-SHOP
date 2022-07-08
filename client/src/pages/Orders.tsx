import React, { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const Order = () => {
    const { fetchGetOrder } = useAction()
    const { order }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrder()
    }, [])

    return (
        <div className='order'>
            <div>
                <h2 className='order-title'>Замовлення клієнтів</h2>
            </div>
            <div className='order-client-container'>
                <div className='order-items'>
                    {order.map((item: any) => {
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