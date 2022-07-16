import React from 'react';
import { NavLink } from 'react-router-dom';
import NewProductItem from './NewProductItem';

const NewProductsList = ({ newProducts }: any) => {
    return (
        <div className='product-new-container'>
            {newProducts.map((item: any) => {
                return (
                    <div key={item.typeId} className='products-new-block'>
                        <div className='products-new-title-btn'>
                            <h1>{item.typeName}</h1>
                            <NavLink to={`../category/${item.typeId}`}>
                                <button>Подивитися більше</button>
                            </NavLink>
                        </div>
                        <div className='products-new-items'>
                            {item.newProducts.map((product: any) => {
                                return <NewProductItem key={product.id} product={product} />
                            })}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default NewProductsList;