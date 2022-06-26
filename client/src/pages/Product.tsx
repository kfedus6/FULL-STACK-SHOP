import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

const Product = () => {
    const { id }: any = useParams()

    const { fetchProduct } = useAction();
    const { product }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProduct(id)
    }, [])
    console.log(product)

    return (
        <div>
            <img src={process.env.REACT_APP_API_URL + product.img} />
            <div>{product.name}</div>
            <div>{product.price}</div>
        </div>
    )
}

export default Product