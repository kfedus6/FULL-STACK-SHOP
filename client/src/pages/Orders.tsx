import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useTranslation } from 'react-i18next';
import OrdersList from '../components/OrdersList';

import '../styles/order.css';

const Order = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { fetchGetOrders } = useAction()
    const { user, products }: any = useTypedSelector(state => state)
    const [searchOrders, setSearchOrders]: any = useState()

    const [checked, setChecked] = useState(false)
    const [orders, setOrders] = useState()

    useEffect(() => {
        if (user.is_admin === false) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        const date = new Date()

        let arrOrders: any = []
        products.orders.forEach((item: any) => {
            let d = item.updatedAt.split('-')
            let h = d[2].slice(3, 5)
            let m = d[2].slice(6, 8)
            let dateDay = d[2]
            dateDay = dateDay.slice(0, 2)

            if (item.status === null) {
                if (date.getDate() > +dateDay && date.getHours() > +h && date.getMinutes() > +m) {
                    arrOrders.push(item)
                    setChecked(true)
                }
            }
        })
        setOrders(arrOrders)
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
        <OrdersList t={t} products={products} checked={checked} setChecked={setChecked} orders={orders} setSearchOrders={setSearchOrders} />
    )
};

export default Order;