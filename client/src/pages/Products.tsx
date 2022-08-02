import React, { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { getPageCount, getPagesArray } from '../utils/page';
import Pagination from '../components/UI/pagination/Pagination';
import ModalAddImage from '../components/UI/modalAddImage/ModalAddImage';
import ModalAddColor from '../components/UI/modalAddColor/ModalAddColor';

import '../styles/products.css';

const Products = () => {
    const [productId, setProductId] = useState('')
    const [color, setColor] = useState('')
    const [colorId, setColorId] = useState('')
    const [img, setImg] = useState('')
    const [totalCount, setTotalCount]: number | any = useState()
    const [page, setPage]: number | any = useState()

    const { products, productColor }: any = useTypedSelector(state => state.products)
    const { fetchProducts, fetchAddBasketProduct, fetchAddProductColor, fetchAddImagesProduct, fetchGetProductColor } = useAction()

    useEffect(() => {
        fetchProducts({ page: page });
    }, [page]);

    useEffect(() => {
        setTotalCount(getPageCount(products.count))
    }, [products])

    useEffect(() => {
        fetchGetProductColor(productId)
    }, [productId])

    let pagesArray = getPagesArray(totalCount)

    const changePage = (page: number) => {
        setPage(page)
    }

    const addBasketProduct = (productId: string) => {
        fetchAddBasketProduct(productId, undefined, undefined)
    }

    const addColor = (id: string) => {
        setProductId(id)
    }
    const createColor = () => {
        fetchAddProductColor(productId, color)
        setColor('')
    }

    const addImg = (productId: string) => {
        setProductId(productId)
    }

    const createImg = () => {
        const formData = new FormData()
        formData.append('colorId', colorId)
        formData.append('img', img[0])
        fetchAddImagesProduct(formData)
    }

    return (
        <div className='container-lg shop-products'>
            <ProductsList
                addBasketProduct={addBasketProduct}
                addColor={addColor}
                addImg={addImg}
            />
            <ModalAddColor
                color={color}
                setColor={setColor}
                createColor={createColor}
            />
            <ModalAddImage
                setImg={setImg}
                createImg={createImg}
                colorId={colorId}
                setColorId={setColorId}
                productColor={productColor}
            />
            <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
        </div>
        /*
        <div className='shop'>
            <ProductsList
                addBasketProduct={addBasketProduct}
                addColor={addColor}
                addImg={addImg}
            />
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
                colorId={colorId}
                setColorId={setColorId}
                productColor={productColor}
            />
            <Pagination pagesArray={pagesArray} changePage={changePage} page={page} />
        </div>
        */
    )
};

export default Products;
