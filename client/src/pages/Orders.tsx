import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const Order = () => {
    const navigate = useNavigate()
    const { fetchGetOrders } = useAction()
    const { user, products }: any = useTypedSelector(state => state)

    useEffect(() => {
        if (user.is_admin === false) {
            navigate('/')
        }
    }, [user])


    useEffect(() => {
        fetchGetOrders()
    }, [products.order])

    return (
        <div className='orders'>
            <div>
                <h2 className='orders-title'>Замовлення клієнтів</h2>
            </div>
            <div className='orders-client-container'>
                <div className='orders-items'>
                    {products.orders.map((item: any) => {
                        let date = item.createdAt.split('-')
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