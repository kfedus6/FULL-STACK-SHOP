import React, { useEffect, useState } from 'react'
import AnyChart from 'anychart-react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useAction } from '../hook/useAction';
import '../styles/statistics.css';

const Statistics = () => {

    const { fetchGetOrderProduct } = useAction()
    const { orderProduct } = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrderProduct()
    }, [])

    return (
        <div className='statistics-shop'>
            <div>
                <h1>Shop</h1>
                <AnyChart type='column' data={orderProduct} title="" />
            </div>
        </div>
    )
}

export default Statistics;