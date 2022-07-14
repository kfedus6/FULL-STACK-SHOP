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
        fetchGetOrderProductClient(id)
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
    console.log(products.order)
    console.log(products.orderProduct)

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
                <div className='order-products-box'>
                    {products.orderProductClient.map((item: any) => {
                        return (
                            <div className='order-product-item' key={item.id}>
                                <img className='order-produtc-img' src={process.env.REACT_APP_API_URL + item.img} alt="products" />
                                <div className='order-produtc-body'>
                                    <span>{item.name}</span>
                                    <div>
                                        <span>{item.price} &#8372; /</span>
                                        <span> 1</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </div >
    )
};

export default OrderProduct;