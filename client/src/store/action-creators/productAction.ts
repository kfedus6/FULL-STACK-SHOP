import { Dispatch } from "react";
import { $authHost, $host } from "../../http";
import { ProductAction, ProductActionTypes } from "../../types/product";

export const fetchProducts = (data = {}) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('api/product/', {
            params: {
                ...data
            }
        })
        dispatch({ type: ProductActionTypes.FETCH_PRODUCTS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchBrands = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('/api/brand/')
        dispatch({ type: ProductActionTypes.FETCH_BRANDS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchTypes = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('/api/type/')
        dispatch({ type: ProductActionTypes.FETCH_TYPES, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchProduct = (id: string) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`api/product/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchCreateBrand = (name: string) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        await $authHost.post('api/brand/', { 'name': name })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchCreateType = (name: string) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        await $authHost.post('api/type/', { 'name': name })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchCreateProduct = (objProduct: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        await $authHost.post('/api/product/', objProduct)
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

