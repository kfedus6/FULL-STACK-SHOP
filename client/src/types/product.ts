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

interface FethcTypesAction {
    type: ProductActionTypes.FETCH_TYPES,
    payload: []
};

interface FethcBrandsAction {
    type: ProductActionTypes.FETCH_BRANDS,
    payload: []
};

interface FethcProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload: {}
};

export type ProductAction = FethcTypesAction | FethcBrandsAction | FethcProductsAction;
