import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { getPageCount, getPagesArray } from '../utils/page';
import Pagination from '../components/UI/pagination/Pagination';
import { useParams } from 'react-router-dom';
import ProductsItem from '../components/ProductsItem';

import '../styles/category.css';
import { useTranslation } from 'react-i18next';

interface typeAndBrand {
    id: number,
    name: string
};

interface productsItem {
    id: string,
    name: string,
    price: string,
    img: string
};

const Category = () => {
    const { t } = useTranslation()
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
        setType(type)
    }

    useEffect(() => {
        getBrandsAndTypes()
    }, [])

    useEffect(() => {
        if (types && id) {
            setType(types.find((type: any) => type.id === id))
        }
    }, [types])

    const getBrandsAndTypes = () => {
        fetchBrands();
        fetchTypes();
    }

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

    useEffect(() => {
        setTotalCount(getPageCount(products.count))
    }, [products])



    let pagesArray = getPagesArray(totalCount)

    const changePage = (page: any) => {
        setPage(page)
    }

    return (
        <div className='container-lg category '>
            <a className='btn-filters h4' type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                {t('category.btn_a')}
            </a>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h4 className="offcanvas-title" id="staticBackdropLabel">{t('category.title')}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='section-category'>
                        <div className='category-title'>
                            <h5>{t('category.brand')}</h5>
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
                                <h5>{t('category.type')}</h5>
                            </div>
                            {types.map((item: typeAndBrand) => {
                                return (
                                    <div key={item.id}>
                                        {id === item.id ?
                                            <>
                                                <input type="radio" id={item.name + item.id}
                                                    name="type" value={item.name} onChange={() => typeChange(item)} />
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
                </div>
            </div>

            <div className='products-cards'>
                {
                    products.rows.map((item: productsItem) => {
                        return (
                            <ProductsItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
            <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
        </div>
    );
};

export default Category;