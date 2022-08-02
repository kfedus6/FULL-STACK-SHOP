import React from 'react';
import { NavLink } from 'react-router-dom';

const NewProductItem = ({ product }: any) => {
    return (
        <div className='product-new-item'>
            <NavLink to={`product/${product.id}`}>
                <img className='product-new-img' src={process.env.REACT_APP_API_URL + product.img} ></img >
            </NavLink>
            <div className='prodcut-new-body'>
                <span>{product.name}</span>
                <span>{product.price}  &#8372;</span>
            </div>
        </div>
    )
}

export default NewProductItem;