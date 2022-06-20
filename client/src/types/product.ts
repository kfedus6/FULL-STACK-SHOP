export interface ProductState {
    types: [],
    brands: [],
    products: { count: number, rows: {} }
};

export enum ProductActionTypes {
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
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

export type ProductAction = FetchTypesAction | FetchBrandsAction | FetchProductsAction;
