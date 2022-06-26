import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/adminPanel.css';

const AdminPanel = () => {

    const { fetchBrands, fetchTypes, fetchCreateBrand, fetchCreateType, fetchCreateProduct } = useAction()
    const { types, brands }: any = useTypedSelector(state => state.products)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brandName, setBrandName] = useState('')
    const [typeName, setTypeName] = useState('')
    const [brand, setBrand] = useState(0)
    const [type, setType] = useState(0)
    const [img, setImg]: any = useState()

    useEffect(() => {
        fetchBrands()
        fetchTypes()
    }, []);

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        console.log(formData)
        console.log(img[0].name)
        //fetchCreateProduct()
    }

    const addBrand = () => {
        const objBrand = Object({ 'name': brandName })
        fetchCreateBrand(objBrand)
        setBrandName('')
    }

    const addType = () => {
        const objType = Object({ 'name': typeName })
        fetchCreateType(objType)
        setTypeName('')
    }

    return (
        <section className='section-admin'>
            <div className='section-product'>
                <div>
                    <span>Продукт</span>
                </div>
                <div className='section-option'>
                    <select onChange={(e) => setBrand(Number(e.target.value))}>
                        <option selected disabled>Бренд</option>
                        {brands.map((item: { id: number, name: string }) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                    <select onChange={(e) => setType(Number(e.target.value))}>
                        <option selected disabled>Тип продукта</option>
                        {types.map((item: { id: number, name: string }) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='info-product'>
                    <input type="file" onChange={(e) => setImg(e.target.files)} />
                    <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='price' onChange={(e) => setPrice(Number(e.target.value))} />
                    <div className='product__add'>
                        <button onClick={addProduct}>Добавити</button>
                    </div>
                </div>
            </div >
            <section className='section-brand'>
                <div>
                    <span>
                        Бренд
                    </span>
                </div>
                <div className='info__brand'>
                    <input type="text" placeholder='name' value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                    <button onClick={addBrand}>Добавити</button>
                </div>
            </section>
            <section className='section-type'>
                <div>
                    <span>
                        Тип продукта
                    </span>
                </div>
                <div className='info__type'>
                    <input type="text" placeholder='name' value={typeName} onChange={(e) => setTypeName(e.target.value)} />
                    <button onClick={addType}>Добавити</button>
                </div>
            </section>
        </section>
    );
};

export default AdminPanel;