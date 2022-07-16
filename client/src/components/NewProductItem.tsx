import React from 'react';

const NewProductItem = ({ product }: any) => {
    return (
        <div className='product-new-item'>
            <img className='product-new-img' src={process.env.REACT_APP_API_URL + product.img} ></img >
            <div className='prodcut-new-body'>
                <span>{product.name}</span>
                <span>{product.price}  &#8372;</span>
            </div>
        </div>
    )
}

export default NewProductItem;