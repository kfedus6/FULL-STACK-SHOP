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
        const response = await $authHost.post('api/brand/', { 'name': name })
        dispatch({ type: ProductActionTypes.FETCH_ADD_BRANDS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchCreateType = (name: string) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('api/type/', { 'name': name })
        dispatch({ type: ProductActionTypes.FETCH_ADD_TYPES, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchCreateProduct = (objProduct: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('/api/product/', objProduct)
        dispatch({ type: ProductActionTypes.FETCH_ADD_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchError = () => async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: null })
};

export const fetchAddBasket = (userId: any, productId: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('/api/basket/', { userId, productId })
        dispatch({ type: ProductActionTypes.FETCH_ADD_BASKET, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetBasketProduct = (userId: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get(`/api/basket/${userId}`)
        dispatch({ type: ProductActionTypes.FETCH_BASKET, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};


export const fetchDeleteBasketProduct = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.delete(`/api/basket/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_DELETE_BASKET, payload: id })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchAddImagesProduct = (formData: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.post('/api/imagesProduct/', formData)
        dispatch({ type: ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetImagesProduct = (productId: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`/api/imagesProduct/${productId}`)
        dispatch({ type: ProductActionTypes.FETCH_IMAGES_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};
