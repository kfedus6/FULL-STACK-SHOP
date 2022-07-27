import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useTranslation } from 'react-i18next';
import '../styles/order.css';

const OrderProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

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

    return (
        <div className='order'>
            <div>
                <h2>{t('ordersproduct.title')}</h2>
            </div>
            <div className='order-container'>
                <div className='order-client'>
                    <span className='client-date'>{products.order.createdAt}</span>
                    <span className='client-name'>{products.order.name}</span>
                    <span className='client-phone'>{products.order.phone}</span>
                    <div className='client-count-product'>
                        <span><h4>{t('ordersproduct.title_count')}:</h4></span>
                        <span className='clinet-count'>{products.orderProduct.reduce((prev: any, count: any) => prev += +count.count, 0)}</span>
                    </div>
                    <div className='order-total-sum'>
                        <span><h3>{t('ordersproduct.title_sum')}:</h3></span>
                        <span className='order-client-sum'>{products.order.sum} &#8372;</span>
                    </div>
                    <div className='order-btn-status'>
                        <button onClick={acceptStatus} className='order-accept'>{t('ordersproduct.button_accept')}</button>
                        <button onClick={cancelStatus} className='order-cancel'>{t('ordersproduct.button_cancel')}</button>
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
                                        <span>{products.orderProduct.map((c: any) => {
                                            if (c.productId === item.id) {
                                                return item.price * c.count
                                            }
                                        })} &#8372; /</span>
                                        <span>{products.orderProduct.map((c: any) => {
                                            if (c.productId === item.id) {
                                                return c.count
                                            }
                                        })}</span>
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