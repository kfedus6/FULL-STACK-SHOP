import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'

import '../styles/product.css';

const Product = () => {
    const { id }: any = useParams()

    const { fetchProduct, fetchGetImagesProduct } = useAction();
    const { product, imagesProduct }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProduct(id)
    }, [])

    useEffect(() => {
        for (let item of product.info) {
            if (item.name === 'color') {
                fetchGetImagesProduct(id, item.description)
            }
        }
    }, [product])
    console.log(imagesProduct)

    return (
        <div className='product-content'>
            <div className='grid-product'>
                <section>
                    <div className='product-items'>
                        {imagesProduct.map((item: any) => {
                            return (
                                <div className='product-img' key={item.id}>
                                    <img src={process.env.REACT_APP_API_URL + item.img} alt="product" />
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section>
                    <div>
                        <h2>{product.name}</h2>
                        <span>{product.price} &#8372;</span>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Product