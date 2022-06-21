import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import ProductItem from './ProductItem';

const ProductsList: React.FC = () => {
    const { fetchProducts } = useAction()
    const { products }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProducts();
    }, []);

    let product
    return (
        <section className='shop'>
            <div>
                <span>Всі товари</span>
            </div>
            <div className='product__content'>
                {product = products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
                    return (
                        <div key={item.id} className='product__box'>
                            <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} />
                            <h4 className='product__name'>{item.name}</h4>
                            <span className='product__price'>{item.price} &#8372;</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductsList;