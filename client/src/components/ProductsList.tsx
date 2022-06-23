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
                        <ProductItem key={item.id} item={item} />
                    )
                })}
            </div>
        </section>
    )
}

export default ProductsList;