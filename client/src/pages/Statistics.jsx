import React, { useEffect, useState } from 'react'
import AnyChart from 'anychart-react';
import { useTypedSelector } from '../hook/useTypedSelector';
import { useAction } from '../hook/useAction';

const Statistics = () => {

    const { fetchGetOrderProduct } = useAction()
    const { orderProduct } = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetOrderProduct()
    }, [])

    console.log(orderProduct)

    return (
        <div>
            <div style={{ marginTop: '100px', width: '50%' }}>
                <AnyChart type='column' data={orderProduct} title="test" />
            </div>
        </div>
    )
}

export default Statistics;