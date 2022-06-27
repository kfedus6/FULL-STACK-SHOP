export interface ProductState {
    types: [],
    brands: [],
    products: { count: number, rows: {} },
    product: {},
    is_loader: boolean,
    error: string | null
};

export enum ProductActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_LOADER_PRODUCT = 'FETCH_LOADER_PRODUCT',
    FETCH_ERROR_PRODUCT = 'FETCH_ERROR_PRODUCT'
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

export type ProductAction = FetchTypesAction | FetchBrandsAction | FetchProductsAction | FetchLoaderAction | FetchProductAction | FetchErrorAction;
