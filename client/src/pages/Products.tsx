import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const Products: React.FC = () => {

    const { fetchProducts, fetchBrands, fetchTypes } = useAction()
    const { products, brands, types }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProducts();
        fetchBrands();
        fetchTypes();
    }, []);

    console.log(brands)
    console.log(types)

    return (
        <section className='shop'>
            <div>
                <span>Всі товари</span>
            </div>
            <div className='product__content'>
                {
                    products ?
                        products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
                            return (
                                <div key={item.id} className='product__box'>
                                    <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} />
                                    <h3 className='product__name'>{item.name}</h3>
                                    <span className='product__price'>{item.price} &#8372;</span>
                                </div>
                            )
                        })
                        :
                        <h1>Загрузка</h1>
                }
            </div>
        </section>
    )
};

export default Products;
