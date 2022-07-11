import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/order.css';

const OrderProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { fetchGetOrderProduct, fetchGetOrder, fetchPutOrder, fetchGetOrderProductClient } = useAction()
    const { user, products }: any = useTypedSelector(state => state)

    useEffect(() => {
        if (user.is_admin === false) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        fetchGetOrder(id)
        fetchGetOrderProduct(id)
    }, [])

    useEffect(() => {
        let orderProduct = products.orderProduct.map((item: any) => item)
        const order = { order: orderProduct }
        //fetchGetOrderProductClient(order)
    }, [])

    const acceptStatus = () => {
        const status = true
        fetchPutOrder(status, id)
        navigate('/order')
    }

    const cancelStatus = () => {
        const status = false
        fetchPutOrder(status, id)
        navigate('/order')
    }

    return (
        <div className='order'>
            <div>
                <h2>Замовлення клієнта</h2>
            </div>
            <div className='order-container'>
                <div className='order-client'>
                    <span className='client-date'>{products.order.createdAt}</span>
                    <span className='client-name'>{products.order.name}</span>
                    <span className='client-phone'>{products.order.phone}</span>
                    <div className='client-count-product'>
                        <span><h4>Замовлені Товари:</h4></span>
                        <span className='clinet-count'>{products.orderProduct.reduce((prev: any, count: any) => prev += +count.count, 0)}</span>
                    </div>
                    <div className='order-total-sum'>
                        <span><h3>Загальна сума:</h3></span>
                        <span className='order-client-sum'>{products.order.sum} &#8372;</span>
                    </div>
                    <div className='order-btn-status'>
                        <button onClick={acceptStatus} className='order-accept'>Прийняти</button>
                        <button onClick={cancelStatus} className='order-cancel'>Скасувати</button>
                    </div>
                </div>
                <div>
                    {products.orderProduct.map((item: any) => {
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