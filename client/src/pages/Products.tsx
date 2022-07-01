import React, { useEffect, useMemo, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { getPageCount, getPagesArray } from '../utils/page';
import '../styles/products.css';

const Products = () => {
    const { fetchProducts } = useAction()
    const { products }: any = useTypedSelector(state => state.products)

    const [totalCount, setTotalCount]: any = useState()
    const [page, setPage]: any = useState()

    useEffect(() => {
        fetchProducts({ page: page });
    }, [page]);

    useMemo(() => {
        setTotalCount(getPageCount(products.count))
    }, [products])

    let pagesArray = getPagesArray(totalCount)

    const changePage = (page: any) => {
        setPage(page)
    }


    return (
        <section className='shop'>
            <div className='section-title'>
                <span>Всі товари</span>
            </div>
            <div className='products__content'>
                {products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
                    return (
                        <ProductsList key={item.id} item={item} />
                    )
                })}
            </div>
            <div className='page__wrapper'>
                {pagesArray.map((p: any) => {
                    return (
                        <span
                            onClick={() => changePage(p)}
                            key={p}
                            className={page === p ? 'page page__current' : 'page'}
                        >{p}</span>
                    )
                })}
            </div>
        </section >
    )
};

export default Products;
