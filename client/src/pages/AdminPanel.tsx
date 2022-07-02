import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { ImCross } from 'react-icons/im';
import '../styles/adminPanel.css';
import Modal from '../components/UI/modal/Modal';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

    const { fetchBrands, fetchTypes, fetchCreateBrand, fetchCreateType, fetchCreateProduct, fetchError, fetchAddImagesProduct } = useAction()
    const { types, brands, error }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state)

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice]: any = useState('')
    const [brandName, setBrandName] = useState('')
    const [typeName, setTypeName] = useState('')
    const [brand, setBrand]: any = useState(0)
    const [type, setType]: any = useState(0)
    const [img, setImg]: any = useState('')
    const [info, setInfo]: any = useState([])
    const [paramater, setParamater] = useState('')
    const [value, setValue] = useState('')
    const [color, setColor]: any = useState('')
    const [productId, setProductId]: any = useState(0)

    useEffect(() => {
        if (user.is_admin === false) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        fetchBrands()
        fetchTypes()
    }, []);

    const addInfo = () => {
        setInfo([...info, { name: paramater, description: value }])
        setParamater('')
        setValue('')
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img', img[0])
        formData.append('brandId', brand)
        formData.append('typeId', type)
        formData.append('info', JSON.stringify(info))
        fetchCreateProduct(formData)
        setName('')
        setPrice('')
    }

    const addImgProduct = () => {
        const formData = new FormData()
        formData.append('productId', productId)
        formData.append('color', color)
        formData.append('img', img[0])
        fetchAddImagesProduct(formData)
        setColor('')
        setProductId('')
    }

    const addBrand = () => {
        fetchCreateBrand(brandName)
        setBrandName('')
    }

    const addType = () => {
        fetchCreateType(typeName)
        setTypeName('')
    }

    return (
        <section className='section-admin'>
            <Modal error={error} fetchError={fetchError}>
                <div className='error__admin-panel'>
                    <span>Помилка</span>
                </div>
                <div className='error__text'>
                    <span>{error}</span>
                </div>
            </Modal>
            <div className='section-product'>
                <div className='title__product'>
                    <span>Продукт</span>
                </div>
                <div className='section-option'>
                    <select onChange={(e) => setBrand(Number(e.target.value))}>
                        <option defaultValue="brand">Бренд</option>
                        {brands.map((item: { id: number, name: string }) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                    <select onChange={(e) => setType(Number(e.target.value))}>
                        <option defaultValue='type'>Тип продукта</option>
                        {types.map((item: { id: number, name: string }) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='info-product'>
                    <input type="file" className='img-product' onChange={(e) => setImg(e.target.files)} />
                    <div className='inp__product'>
                        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='inp__product'>
                        <span>Параметри</span>
                        <input type="parameter" placeholder='parameter' value={paramater} onChange={(e) => setParamater(e.target.value)} />
                        <input type="value" placeholder='value' value={value} onChange={(e) => setValue(e.target.value)} />
                        <div className='btn__parameter'>
                            <button onClick={addInfo}>Добавити параметр</button>
                        </div>
                        <div className='block__info-product'>
                            {info.map((item: any) => {
                                return (
                                    <div key={item.name} className='block__info'>
                                        <span>{item.name} :</span>
                                        <span>{item.description}</span>
                                        <div>
                                            <button><ImCross /></button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='btn__product-add'>
                        <button onClick={addProduct}>Добавити</button>
                    </div>
                </div>
            </div >
            <section className='img-product'>
                <div className='title__product'>
                    <span>Картинка продукта</span>
                </div>
                <div className='info-img-product'>
                    <input className='img-product' type="file" onChange={(e) => setImg(e.target.files)} />
                    <div className='info-input-product'>
                        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
                        <input type="text" value={color} placeholder='Color' onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <button onClick={addImgProduct}>Добавити</button>
                </div>
            </section>
            <section className='section-brand-type'>
                <div className='title-brand-type'>
                    <span>
                        Бренд
                    </span>
                </div>
                <div className='info-brand-type'>
                    <input type="text" placeholder='name' value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                    <div className='btn-brand-type'>
                        <button onClick={addBrand}>Добавити</button>
                    </div>
                </div>
            </section>
            <section className='section-brand-type'>
                <div className='title-brand-type'>
                    <span>
                        Тип продукта
                    </span>
                </div>
                <div className='info-brand-type'>
                    <input type="text" placeholder='name' value={typeName} onChange={(e) => setTypeName(e.target.value)} />
                    <div className='btn-brand-type'>
                        <button onClick={addType}>Добавити</button>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default AdminPanel;