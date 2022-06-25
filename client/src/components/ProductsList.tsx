import React from 'react';

interface itemProduct {
    item: {
        id: number,
        name: string,
        price: string,
        img: string
    }
};

const ProductsList = ({ item }: itemProduct) => {

    return (
        <div key={item.id} className='product__box'>
            <img className='product__img' src={process.env.REACT_APP_API_URL + item.img} />
            <h4 className='product__name'>{item.name}</h4>
            <span className='product__price'>{item.price} &#8372;</span>
        </div>
    )
};

export default ProductsList;