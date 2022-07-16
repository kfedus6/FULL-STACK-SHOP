import React, { useEffect, useMemo, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { getPageCount, getPagesArray } from '../utils/page';
import '../styles/category.css';
import Pagination from '../components/UI/pagination/Pagination';
import { useParams } from 'react-router-dom';

interface typeAndBrand {
    id: number,
    name: string
};

interface itemPrd {
    id: number,
    name: string,
    price: string,
    img: string
};

const Category = () => {
    const { id }: any = useParams()
    const [type, setType] = useState<typeAndBrand>()
    const [brand, setBrand] = useState<typeAndBrand>()
    const [totalCount, setTotalCount]: any = useState()
    const [page, setPage]: any = useState()

    const { fetchProducts, fetchBrands, fetchTypes } = useAction()
    const { products, brands, types }: any = useTypedSelector(state => state.products)

    const brandChange = (brand: any) => {
        setBrand(brand)
    }

    const typeChange = (type: any) => {
        console.log('1')
        setType(type)
    }

    useEffect(() => {
        fetchBrands();
        fetchTypes();
    }, [])

    useEffect(() => {
        if (brand === undefined && type === undefined) {
            fetchProducts({ page: page })
        } else if (brand !== undefined && type === undefined) {
            fetchProducts({ brandId: brand.id, page: page })
        } else if (brand === undefined && type !== undefined) {
            fetchProducts({ typeId: type.id, page: page })
        } else if (brand !== undefined && type !== undefined) {
            fetchProducts({ brandId: brand.id, typeId: type.id, page: page })
        }
    }, [brand, type, page]);

    useMemo(() => {
        setTotalCount(getPageCount(products.count))
    }, [products])

    let pagesArray = getPagesArray(totalCount)

    const changePage = (page: any) => {
        setPage(page)
    }

    return (
        <div className='page__category'>
            <div className='grid'>
                <div className='section-category'>
                    <div className='category-title'>
                        <span>Бренди</span>
                    </div>
                    <div className="brands">
                        {brands.map((item: typeAndBrand) => {
                            return (
                                <div key={item.id}>
                                    <input type="radio" id={item.name + item.id}
                                        name="brand" value={item.name} onChange={() => brandChange(item)} />
                                    <label htmlFor={item.name + item.id}> {item.name}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="types">
                        <div className='category-title'>
                            <span>Одяг</span>
                        </div>
                        {types.map((item: typeAndBrand) => {
                            return (
                                <div key={item.id}>
                                    {id == item.id ?
                                        <>
                                            <input type="radio" id={item.name + item.id}
                                                name="type" checked={true} value={item.name} onChange={() => typeChange(id)} />
                                            <label htmlFor={item.name + id}> {item.name}</label>
                                        </>
                                        :
                                        <>
                                            <input type="radio" id={item.name + item.id}
                                                name="type" value={item.name} onChange={() => typeChange(item)} />
                                            <label htmlFor={item.name + item.id}> {item.name}</label>
                                        </>
                                    }

                                </div>
                            )
                        })}
                    </div>
                </div>
                <section className='shop__conteier-catgory'>
                    <div className='products__content-categor'>
                        {
                            products.rows.map((item: itemPrd) => {
                                return (
                                    <ProductsList key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
                    <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
                </section>
            </div>
        </div>
    );
};

export default Category;