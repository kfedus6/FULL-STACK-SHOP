import { Dispatch } from "react";
import { $host } from "../../http";
import { ProductAction, ProductActionTypes } from "../../types/product";

export const fetchProducts = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('api/product/')
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS, payload: response.data })
    } catch (e) {
        console.log(e)
    }
};

export const fetchBrands = () => async (dispathch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('/api/brand/')
        dispathch({ type: ProductActionTypes.FETCH_BRANDS, payload: response.data })
    } catch (e) {
        console.log(e)
    }
};

export const fetchTypes = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('/api/type/')
        dispatch({ type: ProductActionTypes.FETCH_TYPES, payload: response.data })
    } catch (e) {
        console.log(e)
    }
};
