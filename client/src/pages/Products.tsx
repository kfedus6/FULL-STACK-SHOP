import React from 'react';
import ProductsList from '../components/ProductsList';
import { useTypedSelector } from '../hook/useTypedSelector';

const Products = () => {
    const { products, is_loader } = useTypedSelector(state => state.products)

    return (
        <>
            <ProductsList />
        </>
    )
};

export default Products;
