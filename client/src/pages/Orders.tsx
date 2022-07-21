import React, { useEffect, useState, useTransition } from 'react';
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
    const [searchOrders, setSearchOrders]: any = useState()

    useEffect(() => {
        if (user.is_admin === false) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        const date = new Date()

        products.orders.forEach((item: any) => {
            let d = item.updatedAt.split('-')
            let h = d[2].slice(3, 5)
            let m = d[2].slice(6, 8)
            let dateDay = d[2]
            dateDay = dateDay.slice(0, 2)

            if (item.status === null) {
                if (date.getDate() > +dateDay && date.getHours() > +h && date.getMinutes() > +m) {
                    console.log(item)
                }
            }
        })
    }, [])

    useEffect(() => {
        if (searchOrders === '') {
            fetchGetOrders()
        } else if (isNaN(searchOrders) === true) {
            fetchGetOrders({ name: searchOrders })
        } else if (isNaN(searchOrders) === false) {
            fetchGetOrders({ id: searchOrders })
        }
    }, [products.order, searchOrders])

    return (
        <div className='orders'>
            <div>
                <h2 className='orders-title'>{t('orders.title')}</h2>
                <div className='orders-search'>
                    <input type="search" placeholder={t('orders.search') + '...'} onChange={(e) => setSearchOrders(e.target.value)} />
                </div>
            </div>
            <div className='orders-client-container'>
                <div className='orders-items'>
                    {products.orders.map((item: any) => {
                        let date = item.updatedAt.split('-')
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