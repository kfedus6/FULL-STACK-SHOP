import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
    types: [],
    brands: [],
    basket: [],
    order: [],
    products: { count: 0, rows: [] },
    product: {},
    imagesProduct: [],
    error: null
};

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS: {
            return { ...state, is_loader: false, products: action.payload }
        }
        case ProductActionTypes.FETCH_PRODUCT: {
            return { ...state, product: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_PRODUCT: {
            return { ...state, produts: { ...state.products, produtcs: action.payload } }
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
        case ProductActionTypes.FETCH_ADD_BASKET: {
            return { ...state, basket: [...state.basket, action.payload] }
        }
        case ProductActionTypes.FETCH_DELETE_BASKET: {
            return { ...state, basket: state.basket.filter((p: any) => p.id !== action.payload) }
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
            return { ...state, order: [...state.order, action.payload] }
        }
        default: {
            return state
        }
    }
};

