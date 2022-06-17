import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const Products: React.FC = () => {

    const { fetchProducts } = useAction()
    const { products }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <>
            {
                products ?
                    products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
                        return (
                            <div key={item.id}>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <img src={item.img} alt='product'></img>
                            </div>
                        )
                    })
                    :
                    <h1>Загрузка</h1>
            }
        </>
    );
};

export default Products;
