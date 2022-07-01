import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

const Product = () => {
    const { id }: any = useParams()

    const { fetchProduct, fetchGetImagesProduct } = useAction();
    const { product, imagesProduct }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProduct(id)
        fetchGetImagesProduct(id)
    }, [])

    return (
        <div>
            {imagesProduct.map((item: any) => {
                return (
                    <div key={item.id}>
                        <img src={process.env.REACT_APP_API_URL + item.img} alt="product" />
                    </div>
                )
            })}
            <div>{product.name}</div>
            <div>{product.price}</div>
        </div>
    )
};

export default Product