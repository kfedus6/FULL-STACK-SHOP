import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/products.css';

const Products = () => {

    const { fetchProducts } = useAction()
    const { products, is_lodader }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProducts();
    }, []);

    let product;

    return (
        <>
            <section className='shop'>
                <div>
                    <span>Всі товари</span>
                </div>
                <div className='products__content'>
                    {product = products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
                        return (
                            <NavLink to={`product/${item.id}`} key={item.id}>
                                <ProductsList item={item} />
                            </NavLink>
                        )
                    })}
                </div>
            </section >
        </>
    )
};

export default Products;
