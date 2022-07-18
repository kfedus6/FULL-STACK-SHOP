import React, { useEffect, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderItem from '../components/OrdersItem';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useTranslation } from 'react-i18next';
import '../styles/order.css';

const Order = () => {
    const { t } = useTranslation()
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
                <h2 className='orders-title'>{t('orders.title')}</h2>
            </div>
            <div className='orders-client-container'>
                <div className='orders-items'>
                    {products.orders.map((item: any) => {
                        let date = item.createdAt.split('-')
                        let dateDay = date[2]
                        dateDay = dateDay.slice(0, 2)
                        let status;
                        if (item.status === false) {
                            status = t('orders.status_false')
                        } else if (item.status === true) {
                            status = t('orders.status_true')
                        } else {
                            status = t('orders.status')
                        }
                        return (
                            <OrderItem key={item.id} item={item} date={date} dateDay={dateDay} status={status} t={t} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Order;