import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiImageAddFill, RiShoppingBasketFill } from 'react-icons/ri'
import { CgFormatColor } from 'react-icons/cg'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useTypedSelector } from '../hook/useTypedSelector'

const ProductsItem = ({ item, inBasket, addBasketProduct, addColor, addImg, setProductId }: any) => {

    const { is_admin, is_login }: any = useTypedSelector(state => state.user)

    if (is_login === false && is_admin === false) {
        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-10 p-1">
                <div className="card h-100">
                    <NavLink to={`product/${item.id}`}>
                        <img className="card-img-top" src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                    </NavLink>
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text">{item.price} &#8372;</p>
                    </div>
                </div>
            </div>
        )
    } else if (is_login === true && is_admin === false) {
        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-10 p-1">
                <div className="card h-100">
                    <NavLink to={`product/${item.id}`}>
                        <img className="card-img-top" src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                    </NavLink>
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <div className='d-flex justify-content-between aling-items-center'>
                            <p className="card-text">{item.price} &#8372;</p>
                            <button
                                className={inBasket ? 'btn__basket selected' : 'btn__basket'}
                                onClick={() => addBasketProduct(item.id)}>
                                <RiShoppingBasketFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col-xl-3 col-md-4 col-sm-5 col-9 p-1">
                <div className="card h-100">
                    <NavLink to={`product/${item.id}`}>
                        <img className="card-img-top" src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                    </NavLink>
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <div className='d-flex justify-content-between aling-items-center'>
                            <div>
                                <p className="card-text">{item.price} &#8372;</p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className='btn-add-color'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => addColor(item.id)}>
                                    <CgFormatColor />
                                </button>
                                <button
                                    type="button"
                                    className='btn-add-image'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalImg"
                                    onClick={() => addImg(item.id)}>
                                    <RiImageAddFill />
                                </button>
                                <button
                                    type="button"
                                    className='btn-delete-product'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalDelete"
                                    onClick={() => setProductId(item.id)}>
                                    <AiTwotoneDelete />
                                </button>
                                <button
                                    className={inBasket ? 'btn__basket selected' : 'btn__basket'}
                                    onClick={() => addBasketProduct(item.id)}>
                                    <RiShoppingBasketFill />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsItem