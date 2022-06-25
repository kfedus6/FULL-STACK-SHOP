import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

const Product = () => {
    const { id }: any = useParams()


    const { fetchProduct } = useAction();
    const { products } = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProduct(id)
    }, [])
    console.log(products)
    return (
        <div>Product</div>
    )
}

export default Product