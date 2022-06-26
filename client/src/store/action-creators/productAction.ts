import { Dispatch } from "react";
import { $authHost, $host } from "../../http";
import { ProductAction, ProductActionTypes } from "../../types/product";

export const fetchProducts = (data = {}) => async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.FETCH_LOADER, payload: true })
    try {
        const response = await $host.get('api/product/', {
            params: {
                ...data
            }
        })
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

export const fetchProduct = (id: string) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`api/product/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_PRODUCT, payload: response.data })
    } catch (e) {
        console.log(e)
    }
};

export const fetchCreateBrand = (objBrand: {}) => async (dispatch: Dispatch<ProductAction>) => {
    await $authHost.post('api/brand/', objBrand)
};

export const fetchCreateType = (objType: {}) => async (dispatch: Dispatch<ProductAction>) => {
    await $authHost.post('api/type/', objType)
};

export const fetchCreateProduct = (objProduct: {}) => async (dispatch: Dispatch<ProductAction>) => {
    await $authHost.post('/api/product/', objProduct)
};

