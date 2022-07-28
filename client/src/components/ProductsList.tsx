import React, { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hook/useTypedSelector';
import { RiImageAddFill, RiShoppingBasketFill } from 'react-icons/ri';
import { useAction } from '../hook/useAction';
import { AiTwotoneDelete } from 'react-icons/ai';
import { CgFormatColor } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
import ModalAddColor from './UI/modalAddColor/ModalAddColor';
import ModalAddImage from './UI/modalAddImage/ModalAddImage';

const ProductsList = ({ item, inBasket }: any) => {
    const { t } = useTranslation()
    const { fetchAddBasketProduct, fetchAddProductColor, fetchAddImagesProduct } = useAction();

    const [visibleColor, setVisibleColor] = useState(false)
    const [visibleImg, setVisibleImg] = useState(false)
    const [productId, setProductId] = useState('')
    const [color, setColor] = useState('')
    const [img, setImg] = useState('')

    const { user } = useTypedSelector(state => state)

    const addBasketProduct = (productId: any) => {
        fetchAddBasketProduct(productId, undefined, undefined)
    }

    const addColor = (id: any) => {
        setProductId(id)
        setVisibleColor(true)
    }
    const createColor = () => {
        fetchAddProductColor(productId, color)
        setVisibleColor(false)
        setColor('')
    }

    const addImg = (productId: any) => {
        setProductId(productId)
        setVisibleImg(true)
    }

    const createImg = () => {
        const formData = new FormData()
        formData.append('productId', productId)
        formData.append('color', color)
        formData.append('img', img[0])
        fetchAddImagesProduct(formData)
        setVisibleImg(false)
    }

    if (user.is_login === false && user.is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <div className='block__price-btn'>
                        <span className='products__price'>{item.price} &#8372;</span>
                    </div>
                </div>
            </div>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <span className='products__price'>{item.price} &#8372;</span>
                    <div className='block__btn-basket'>
                        <button className={inBasket ? 'btn__basket selected' : 'btn__basket'} onClick={() => addBasketProduct(item.id)}><RiShoppingBasketFill /></button>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img category' src={process.env.REACT_APP_API_URL + item.img} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <span className='products__price'>{item.price} &#8372;</span>
                    <div className='block__btn-basket'>
                        <button onClick={() => addColor(item.id)} className='btn-add-color'><CgFormatColor /></button>
                        <button onClick={() => addImg(item.id)} className='btn-add-image'><RiImageAddFill /></button>
                        <button className='btn-delete-product'><AiTwotoneDelete /></button>
                        <button className={inBasket ? 'btn__basket selected' : 'btn__basket'} onClick={() => addBasketProduct(item.id)}><RiShoppingBasketFill /></button>
                    </div>
                </div>
                <ModalAddColor
                    visibleColor={visibleColor}
                    setVisibleColor={setVisibleColor}
                    color={color}
                    setColor={setColor}
                    createColor={createColor}
                />
                <ModalAddImage
                    visibleImg={visibleImg}
                    setImg={setImg}
                    createImg={createImg}
                    color={color}
                    setColor={setColor}
                />
            </div >
        )
    }
};

export default ProductsList;