import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiImageAddFill, RiShoppingBasketFill } from 'react-icons/ri'
import { CgFormatColor } from 'react-icons/cg'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useTypedSelector } from '../hook/useTypedSelector'

const ProductsItem = ({ item, inBasket, addBasketProduct, addColor, addImg }: any) => {

    const { is_admin, is_login }: any = useTypedSelector(state => state.user)

    if (is_login === false && is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                </NavLink>
                <div className='block__body'>
                    <div className='products__name'>{item.name}</div>
                    <div className='block__price-btn'>
                        <span className='products__price'>{item.price} &#8372;</span>
                    </div>
                </div>
            </div>
        )
    } else if (is_login === true && is_admin === false) {
        return (
            <div key={item.id} className='products__box'>
                <NavLink to={`product/${item.id}`}>
                    <img className='products__img' src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
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
                    <img className='products__img category' src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
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
            </div >
        )
    }
}

export default ProductsItem