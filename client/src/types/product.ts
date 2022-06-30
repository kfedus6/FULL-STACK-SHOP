export interface ProductState {
    types: [],
    brands: [],
    basket: [],
    products: { count: number, rows: {} },
    product: {},
    imagesProduct: [],
    is_loader: boolean,
    error: string | null
};

export enum ProductActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_LOADER_PRODUCT = 'FETCH_LOADER_PRODUCT',
    FETCH_ERROR_PRODUCT = 'FETCH_ERROR_PRODUCT',
    FETCH_BASKET = 'FETCH_BASKET',
    FETCH_IMAGES_PRODUCT = 'FETCH_IMAGES_PRODUCT'
};

interface FetchTypesAction {
    type: ProductActionTypes.FETCH_TYPES,
    payload: []
};

interface FetchBrandsAction {
    type: ProductActionTypes.FETCH_BRANDS,
    payload: []
};

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload: {}
};

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT,
    payload: {}
};

interface FetchLoaderAction {
    type: ProductActionTypes.FETCH_LOADER_PRODUCT,
    payload: boolean
};

interface FetchErrorAction {
    type: ProductActionTypes.FETCH_ERROR_PRODUCT,
    payload: string | null
};

interface FetchBasketAction {
    type: ProductActionTypes.FETCH_BASKET,
    payload: []
};

interface FetchImagesProductAction {
    type: ProductActionTypes.FETCH_IMAGES_PRODUCT,
    payload: []
}

export type ProductAction =
    FetchTypesAction |
    FetchBrandsAction |
    FetchProductsAction |
    FetchLoaderAction |
    FetchProductAction |
    FetchErrorAction |
    FetchBasketAction |
    FetchImagesProductAction;
