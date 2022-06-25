import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const AdminPanel = () => {

    const { fetchBrands, fetchTypes } = useAction()
    const { types, brands }: any = useTypedSelector(state => state.products)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState(0)
    const [type, setType] = useState(0)

    useEffect(() => {
        fetchBrands()
        fetchTypes()
    }, []);

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        //Создать экшен на создание товара
        //экшен принимает парамметром форм дату
        //await $authhost.post('api/product',formData)
    }

    return (
        <div>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='price' onChange={(e) => setPrice(Number(e.target.value))} />
            <select onChange={(e) => setBrand(Number(e.target.value))}>
                {brands.map((item: { id: number, name: string }) => {
                    return (
                        <option value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <select onChange={(e) => setType(Number(e.target.value))}>
                {types.map((item: { id: number, name: string }) => {
                    return (
                        <option value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <button onClick={addProduct}>add</button>
        </div >
    );
};

export default AdminPanel;