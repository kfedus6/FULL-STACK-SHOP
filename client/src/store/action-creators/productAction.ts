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

export const fetchAddBasketProduct = (id: any, color: any, size: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post(`/api/basket/${id}`, { color, size })
        dispatch({ type: ProductActionTypes.FETCH_ADD_BASKET_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetBasketProduct = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get('/api/basket/')
        dispatch({ type: ProductActionTypes.FETCH_BASKET, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchDeleteBasketProduct = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.delete(`/api/basket/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_DELETE_BASKET_PRODUCT, payload: id })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchDeleteBasketProducts = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.delete(`/api/basket/products/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_DELETE_BASKET_PRODUCTS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchAddImagesProduct = (formData: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('/api/imagesProduct/', formData)
        dispatch({ type: ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetImagesProduct = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`/api/imagesProduct/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_GET_IMAGES_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchAddProductColor = (productId: any, color: any) => async (dispatch: Dispatch<ProductAction>) => {
    console.log(productId, color)
    try {
        const response = await $authHost.post(`/api/imagesProduct/color/${productId}`, { color })
        dispatch({ type: ProductActionTypes.FETCH_ADD_PRODUCT_COLOR, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetProductColor = (productId: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`/api/imagesProduct/color/${productId}`)
        dispatch({ type: ProductActionTypes.FETCH_GET_PRODUCT_COLOR, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};


export const fetchAddOrderProduct = (order: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('/api/order/', order)
        dispatch({ type: ProductActionTypes.FETCH_ADD_ORDER_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetOrderProduct = (orderId: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get(`/api/order/product/${orderId}`)
        dispatch({ type: ProductActionTypes.FETCH_ORDER_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetOrders = (data = {}) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get('/api/order/', {
            params: {
                ...data
            }
        })
        dispatch({ type: ProductActionTypes.FETCH_ORDERS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};


export const fetchGetOrder = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get(`/api/order/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_ORDER, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};


export const fetchPutOrder = (status: boolean, id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.put('/api/order/', { status, id })
        dispatch({ type: ProductActionTypes.FETCH_PUT_ORDER, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetOrderProductClient = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.get(`/api/order/products/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_ORDER_PRODUCT_CLIENT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetNewProducts = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('/api/product/newProducts')
        dispatch({ type: ProductActionTypes.FETCH_NEW_PRODUCT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchAddComment = (productId: any, text: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.post('/api/comment', { productId, text })
        dispatch({ type: ProductActionTypes.FETCH_ADD_COMMENT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchGetComments = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get(`/api/comment/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_GET_COMMENTS, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};

export const fetchDeleteComments = (id: any) => async (dispatch: Dispatch<ProductAction>) => {
    try {
        const response = await $authHost.delete(`/api/comment/${id}`)
        dispatch({ type: ProductActionTypes.FETCH_DELETE_COMMENT, payload: response.data })
    } catch (err: any) {
        dispatch({ type: ProductActionTypes.FETCH_ERROR_PRODUCT, payload: err.response.data.message })
    }
};