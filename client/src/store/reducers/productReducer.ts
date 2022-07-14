import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
    types: [],
    brands: [],
    basket: [],
    orderProduct: [],
    orderProductClient: [],
    orders: [],
    order: [],
    products: { count: 0, rows: [] },
    product: {},
    imagesProduct: [],
    error: null
};

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS: {
            return { ...state, products: action.payload }
        }
        case ProductActionTypes.FETCH_PRODUCT: {
            return { ...state, product: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_PRODUCT: {
            return { ...state, products: { ...state.products, produtcs: action.payload } }
        }
        case ProductActionTypes.FETCH_BRANDS: {
            return { ...state, brands: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_BRANDS: {
            return { ...state, brands: [...state.brands, action.payload] }
        }
        case ProductActionTypes.FETCH_TYPES: {
            return { ...state, types: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_TYPES: {
            return { ...state, types: [...state.types, action.payload] }
        }
        case ProductActionTypes.FETCH_BASKET: {
            return { ...state, basket: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_BASKET_PRODUCT: {
            return { ...state, basket: [...state.basket, action.payload] }
        }
        case ProductActionTypes.FETCH_DELETE_BASKET_PRODUCT: {
            return { ...state, basket: state.basket.filter((p: any) => p.id !== action.payload) }
        }
        case ProductActionTypes.FETCH_DELETE_BASKET_PRODUCTS: {
            return { ...state, basket: [] }
        }
        case ProductActionTypes.FETCH_IMAGES_PRODUCT: {
            return { ...state, imagesProduct: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT: {
            return { ...state, imagesProduct: [...state.imagesProduct, action.payload] }
        }
        case ProductActionTypes.FETCH_ERROR_PRODUCT: {
            return { ...state, error: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_ORDER_PRODUCT: {
            return { ...state, order: action.payload }
        }
        case ProductActionTypes.FETCH_ORDER_PRODUCT: {
            return { ...state, orderProduct: action.payload }
        }
        case ProductActionTypes.FETCH_ORDERS: {
            return { ...state, orders: action.payload }
        }
        case ProductActionTypes.FETCH_ORDER: {
            return { ...state, order: action.payload }
        }
        case ProductActionTypes.FETCH_PUT_ORDER: {
            return { ...state, order: action.payload }
        }
        case ProductActionTypes.FETCH_ORDER_PRODUCT_CLIENT: {
            return { ...state, orderProductClient: action.payload }
        }
        default: {
            return state
        }
    }
};

