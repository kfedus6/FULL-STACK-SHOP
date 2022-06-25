import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

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
    const { fetchProducts, fetchBrands, fetchTypes } = useAction()
    const { products, brands, types }: any = useTypedSelector(state => state.products)

    const [type, setType] = useState<typeAndBrand>()
    const [brand, setBrand] = useState<typeAndBrand>()

    const typeChange = (type: any) => {
        setType(type)
    }

    const brandChange = (brand: any) => {
        setBrand(brand)
    }

    useEffect(() => {
        fetchBrands();
        fetchTypes();
    }, [])

    useEffect(() => {
        if (brand === undefined && type === undefined) {
            fetchProducts()
        } else if (brand !== undefined && type === undefined) {
            fetchProducts({ brandId: brand.id })
        } else if (brand === undefined && type !== undefined) {
            fetchProducts({ typeId: type.id })
        } else if (brand !== undefined && type !== undefined) {
            fetchProducts({ brandId: brand.id, typeId: type.id })
        }
    }, [brand, type]);

    return (
        <>
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
                            <input type="radio" id={item.name + item.id}
                                name="type" value={item.name} onChange={() => typeChange(item)} />
                            <label htmlFor={item.name + item.id}> {item.name}</label>
                        </div>
                    )
                })}
            </div>
            <section className='shop'>
                <div className='products__content'>
                    {
                        products.rows.map((item: itemPrd) => {
                            return (
                                <div key={item.id} className='product__box'>
                                    <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} alt='product' />
                                    <h4 className='product__name'>{item.name}</h4>
                                    <span className='product__price'>{item.price} &#8372;</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Category;