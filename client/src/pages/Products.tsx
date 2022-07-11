import React, { useEffect, useMemo, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { getPageCount, getPagesArray } from '../utils/page';
import Pagination from '../components/UI/pagination/Pagination';
import '../styles/products.css';

const Products = () => {
    const { fetchProducts } = useAction()
    const { products, basket }: any = useTypedSelector(state => state.products)

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
                    let itemBasket = basket.find((product: any) => product.id === item.id)
                    return (
                        <ProductsList key={item.id} item={item} inBasket={itemBasket ? true : false} />
                    )
                })}
            </div>
            <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
        </section >
    )
};

export default Products;
