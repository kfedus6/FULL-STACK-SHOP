import React, { useEffect, useState } from 'react'
import AnyChart from 'anychart-react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useAction } from '../hook/useAction';

const Statistics = () => {
    /*
        1 - получить айди заказов которые завершенные              +
        2 - отобрать все продукты из завершенных заказов           +
        3 - составить коллекцию, продукта и количество его продаж

        [[name,43],[name,66]]
    */

    const { fetchGetOrders, fetchGetOrderProduct } = useAction()
    const { orders, orderProduct } = useTypedSelector(state => state.products)
    const [finalyOrders, setFinalyOrders] = useState([])
    const [orderProducts, setOrderProducts] = useState([])

    useEffect(() => {
        fetchGetOrders()
    }, [])

    useEffect(() => {
        const arr = orders.filter(item => item.status === true)
        setFinalyOrders(arr)
    }, [orders])

    useEffect(() => {
        for (const fo of finalyOrders) {
            fetchGetOrderProduct(fo.id)
        }
    }, [finalyOrders])

    console.log(orderProduct)

    /* 
        const getOrderProducts = async () => {
            const arr = []
            for (const fo of finalyOrders) {
                const op = await fetchGetOrderProduct(fo.id)
                arr.push(op)
            }
            setOrderProducts(arr)
        }
        console.log(orderProducts)
     */

    return (
        <div>
            <div style={{ marginTop: '100px', width: '50%' }}>
                <AnyChart type='column' data={[['hoodie', 32], ['t-shirt', 323]]} title="test" />
            </div>
        </div>
    )
}

export default Statistics;