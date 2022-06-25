export interface ProductState {
    types: [],
    brands: [],
    products: { count: number, rows: {} },
    is_loader: boolean
};

export enum ProductActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_LOADER = 'FETCH_LOADER'
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
    type: ProductActionTypes.FETCH_LOADER,
    payload: boolean
};

export type ProductAction = FetchTypesAction | FetchBrandsAction | FetchProductsAction | FetchLoaderAction | FetchProductAction;
