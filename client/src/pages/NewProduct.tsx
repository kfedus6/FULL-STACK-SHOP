import React, { useEffect } from 'react';
import NewProductsList from '../components/NewProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import '../styles/newProducts.css';

const NewProduct = () => {
    const { fetchGetNewProducts } = useAction()
    const { newProducts }: any = useTypedSelector(state => state.products)

    useEffect(() => {
        fetchGetNewProducts()
    }, [])

    return (
        <NewProductsList newProducts={newProducts} />
    );
};

export default NewProduct;