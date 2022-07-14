import React, { useEffect } from 'react';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const NewProduct = () => {
    const { fetchProducts } = useAction()
    const { products } = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>NewProduct</div>
    );
};

export default NewProduct;