import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalError from '../components/UI/modalError/ModalError';

import '../styles/adminPanel.css';

const AdminPanel = () => {
    const { t } = useTranslation()

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
            <div className='section-product'>
                <div className='title__product'>
                    <span>{t('adminpanel.title_product')}</span>
                </div>
                <div className='section-option'>
                    <select onChange={(e) => setBrand(Number(e.target.value))}>
                        <option defaultValue="brand">{t('adminpanel.option_brands')}</option>
                        {brands.map((item: { id: number, name: string }) => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                    <select onChange={(e) => setType(Number(e.target.value))}>
                        <option defaultValue='type'>{t('adminpanel.option_type')}</option>
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
                        <input type="text" placeholder={t('adminpanel.placeholder_name')} value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder={t('adminpanel.placeholder_price')} value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='inp__product'>
                        <span>{t('adminpanel.title_parameters')}</span>
                        <input type="parameter" placeholder={t('adminpanel.placeholder_parameter')} value={paramater} onChange={(e) => setParamater(e.target.value)} />
                        <input type="value" placeholder={t('adminpanel.placeholder_value')} value={value} onChange={(e) => setValue(e.target.value)} />
                        <div className='btn__parameter'>
                            <button onClick={addInfo}>{t('adminpanel.btn_parameter')}</button>
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
                        <button onClick={addProduct}>{t('adminpanel.btn_create')}</button>
                    </div>
                </div>
            </div >
            <section className='section-brand-type'>
                <div className='title-brand-type'>
                    <span>
                        {t('adminpanel.option_brands')}
                    </span>
                </div>
                <div className='info-brand-type'>
                    <input type="text" placeholder={t('adminpanel.placeholder_name')} value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                    <div className='btn-brand-type'>
                        <button onClick={addBrand}>{t('adminpanel.btn_create')}</button>
                    </div>
                </div>
            </section>
            <section className='section-brand-type'>
                <div className='title-brand-type'>
                    <span>
                        {t('adminpanel.option_type')}
                    </span>
                </div>
                <div className='info-brand-type'>
                    <input type="text" placeholder={t('adminpanel.placeholder_name')} value={typeName} onChange={(e) => setTypeName(e.target.value)} />
                    <div className='btn-brand-type'>
                        <button onClick={addType}>{t('adminpanel.btn_create')}</button>
                    </div>
                </div>
            </section>
            <ModalError error={error} fetchError={fetchError} t={t} />
        </section >
    );
};

export default AdminPanel;