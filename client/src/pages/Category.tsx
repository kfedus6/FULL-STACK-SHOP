import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const Category = () => {
    const { fetchProducts, fetchBrands, fetchTypes } = useAction()
    const { products, brands, types }: any = useTypedSelector(state => state.products)

    const [type, setType] = useState({ id: Number, name: String })
    const [brand, setBrand] = useState({ id: Number, name: String })

    const typeChange = (type: any) => {
        setType(type)
    }

    const brandChange = (brand: any) => {
        setBrand(brand)
    }

    useEffect(() => {
        fetchProducts();
        fetchBrands();
        fetchTypes();
    }, [])

    useEffect(() => {
        fetchProducts({ brandId: brand.id, typeId: type.id })
    }, [brand, type]);

    console.log(products)

    return (
        <>
            <div className="types">
                {types.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <input type="radio" id={item.name + item.id}
                                name="type" value={item.name} onChange={() => typeChange(item)} />
                            <label htmlFor={item.name + item.id}>{item.name}</label>
                        </div>
                    )
                })}
            </div>
            <div className="brands">
                {brands.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <input type="radio" id={item.name + item.id}
                                name="brand" value={item.name} onChange={() => brandChange(item)} />
                            <label htmlFor={item.name + item.id}>{item.name}</label>
                        </div>
                    )
                })}
            </div>
            <section className='shop'>
                <div className='product__content'>
                    {products.rows.map((item: { id: number, name: string, price: string, img: string }) => {
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
        </>
    );
};

export default Category;