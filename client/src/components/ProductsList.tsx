import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../hook/useTypedSelector';
import ProductsItem from './ProductsItem';

interface propsProductsList {
    addBasketProduct: (productId: string) => void,
    addColor: (id: string) => void,
    addImg: (productId: string) => void
}

interface productsItem {
    id: string,
    name: string,
    price: string,
    img: string
}

const ProductsList: React.FC<propsProductsList> = ({ addBasketProduct, addColor, addImg }) => {
    const { t } = useTranslation()
    const { products, basket }: any = useTypedSelector(state => state.products)

    return (
        <div>
            <div className='section-title'>
                <span>{t('products.title')}</span>
            </div>
            <div className='products__content'>
                {products.rows.map((item: productsItem) => {
                    let itemBasket = basket.find((product: { id: string }) => product.id === item.id)
                    return (
                        <ProductsItem
                            key={item.id}
                            item={item}
                            inBasket={itemBasket ? true : false}
                            addBasketProduct={addBasketProduct}
                            addColor={addColor}
                            addImg={addImg}
                        />
                    )
                })}
            </div>
        </div >
    )
};

export default ProductsList;