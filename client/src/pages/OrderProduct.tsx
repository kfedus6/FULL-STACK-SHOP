import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const OrderProduct = () => {
    const { id } = useParams()

    const { fetchGetOrderProduct } = useAction()
    const { orderProduct } = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrderProduct(id)
    }, [])

    console.log(orderProduct)

    return (
        <div>OrderProduct</div>
    )
};

export default OrderProduct;