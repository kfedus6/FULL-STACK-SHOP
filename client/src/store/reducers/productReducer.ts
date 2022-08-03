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
    newProducts: [],
    product: {},
    comments: [],
    imagesProduct: [],
    productColor: [],
    carouselImages: [],
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
        case ProductActionTypes.FETCH_GET_IMAGES_PRODUCT: {
            return { ...state, imagesProduct: action.payload }
        }
        case ProductActionTypes.FETCH_GET_IMAGE_PRODUCT: {
            return { ...state, imagesProduct: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT: {
            return { ...state, imagesProduct: [...state.imagesProduct, action.payload] }
        }
        case ProductActionTypes.FETCH_ADD_PRODUCT_COLOR: {
            return { ...state, productColor: [...state.productColor, action.payload] }
        }
        case ProductActionTypes.FETCH_GET_PRODUCT_COLOR: {
            return { ...state, productColor: action.payload }
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
        case ProductActionTypes.FETCH_NEW_PRODUCT: {
            return { ...state, newProducts: action.payload }
        }
        case ProductActionTypes.FETCH_ADD_COMMENT: {
            return { ...state, comments: [...state.comments, action.payload] }
        }
        case ProductActionTypes.FETCH_GET_COMMENTS: {
            return { ...state, comments: action.payload }
        }
        case ProductActionTypes.FETCH_DELETE_COMMENT: {
            return { ...state, comments: action.payload }
        }
        case ProductActionTypes.FETCH_POST_CAROUSEL: {
            return { ...state, carouselmages: [...state.carouselImages, action.payload] }
        }
        case ProductActionTypes.FETCH_GET_CAROUSEL: {
            return { ...state, carouselImages: action.payload }
        }
        case ProductActionTypes.FETCH_DELETE_CAROUSEL: {
            return { ...state, carouselImages: action.payload }
        }
        default: {
            return state
        }
    }
};

