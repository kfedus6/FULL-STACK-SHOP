import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
    types: [],
    brands: [],
    basket: [],
    products: { count: 0, rows: [] },
    product: {},
    imagesProduct: [],
    is_loader: false,
    error: null
};

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.FETCH_LOADER_PRODUCT: {
            return { ...state, is_loader: action.payload }
        }
        case ProductActionTypes.FETCH_PRODUCTS: {
            return { ...state, is_loader: false, products: action.payload }
        }
        case ProductActionTypes.FETCH_BRANDS: {
            return { ...state, brands: action.payload }
        }
        case ProductActionTypes.FETCH_TYPES: {
            return { ...state, types: action.payload }
        }
        case ProductActionTypes.FETCH_PRODUCT: {
            return { ...state, product: action.payload }
        }
        case ProductActionTypes.FETCH_ERROR_PRODUCT: {
            return { ...state, error: action.payload }
        }
        case ProductActionTypes.FETCH_BASKET: {
            return { ...state, basket: action.payload }
        }
        case ProductActionTypes.FETCH_IMAGES_PRODUCT: {
            return { ...state, imagesProduct: action.payload }
        }
        default: {
            return state
        }
    }
};

