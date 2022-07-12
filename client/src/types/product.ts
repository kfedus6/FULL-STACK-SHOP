export interface ProductState {
    types: [],
    brands: [],
    basket: [],
    orderProduct: [],
    orderProductClient: [],
    orders: [],
    order: [],
    products: { count: number, rows: {} },
    product: {},
    imagesProduct: [],
    error: string | null
};

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_ADD_PRODUCT = 'FETCH_ADD_PRODUCT',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_ADD_BRANDS = 'FETCH_ADD_BRANDS',
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_ADD_TYPES = 'FETCH_ADD_TYPES',
    FETCH_BASKET = 'FETCH_BASKET',
    FETCH_ADD_BASKET_PRODUCT = 'FETCH_ADD_BASKET',
    FETCH_DELETE_BASKET_PRODUCT = 'FETCH_DELETE_BASKET',
    FETCH_DELETE_BASKET_PRODUCTS = 'FETCH_DELETE_BASKET',
    FETCH_IMAGES_PRODUCT = 'FETCH_IMAGES_PRODUCT',
    FETCH_ADD_IMAGES_PRODUCT = 'FETCH_IMAGES_PRODUCT',
    FETCH_ERROR_PRODUCT = 'FETCH_ERROR_PRODUCT',
    FETCH_ADD_ORDER_PRODUCT = 'FETCH_ADD_ORDER',
    FETCH_ORDER_PRODUCT = 'FETCH_ORDER_PRODUCT',
    FETCH_ORDERS = 'FETCH_ORDERS',
    FETCH_ORDER = 'FETCH_ORDER',
    FETCH_PUT_ORDER = 'FETCH_PUT_ORDER',
    FETCH_ORDER_PRODUCT_CLIENT = 'FETCH_ORDER_PRODUCT_CLIENT',
};

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload: {}
};

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT,
    payload: {}
};

interface FetchProductAddAction {
    type: ProductActionTypes.FETCH_ADD_PRODUCT,
    payload: {}
};

interface FetchBrandsAction {
    type: ProductActionTypes.FETCH_BRANDS,
    payload: []
};

interface FetchBrandsAddAction {
    type: ProductActionTypes.FETCH_ADD_BRANDS,
    payload: []
};

interface FetchTypesAction {
    type: ProductActionTypes.FETCH_TYPES,
    payload: []
};

interface FetchTypesAddAction {
    type: ProductActionTypes.FETCH_ADD_TYPES,
    payload: []
};

interface FetchBasketAction {
    type: ProductActionTypes.FETCH_BASKET,
    payload: []
};

interface FetchBasketAddProductAction {
    type: ProductActionTypes.FETCH_ADD_BASKET_PRODUCT,
    payload: []
};

interface FetchBasketDeleteProductAction {
    type: ProductActionTypes.FETCH_DELETE_BASKET_PRODUCT,
    payload: []
};

interface FetchBasketDeleteProductsAction {
    type: ProductActionTypes.FETCH_DELETE_BASKET_PRODUCTS,
    payload: []
};

interface FetchImagesProductAction {
    type: ProductActionTypes.FETCH_IMAGES_PRODUCT,
    payload: []
}

interface FetchAddImagesProductAction {
    type: ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT,
    payload: []
}

interface FetchErrorAction {
    type: ProductActionTypes.FETCH_ERROR_PRODUCT,
    payload: string | null
};

interface FetchAddOrderProductAction {
    type: ProductActionTypes.FETCH_ADD_ORDER_PRODUCT,
    payload: []
};

interface FetchOrderProductAction {
    type: ProductActionTypes.FETCH_ORDER_PRODUCT,
    payload: []
};

interface FetchOrdersAction {
    type: ProductActionTypes.FETCH_ORDERS,
    payload: []
};

interface FetchOrderAction {
    type: ProductActionTypes.FETCH_ORDER,
    payload: []
};

interface FetchOrderPutAction {
    type: ProductActionTypes.FETCH_PUT_ORDER,
    payload: []
};

interface FetchOrderProductClientAction {
    type: ProductActionTypes.FETCH_ORDER_PRODUCT_CLIENT,
    payload: []
};

export type ProductAction =
    FetchProductsAction |
    FetchProductAction |
    FetchProductAddAction |
    FetchBrandsAction |
    FetchBrandsAddAction |
    FetchTypesAction |
    FetchTypesAddAction |
    FetchBasketAction |
    FetchBasketAddProductAction |
    FetchBasketDeleteProductAction |
    FetchBasketDeleteProductsAction |
    FetchImagesProductAction |
    FetchAddImagesProductAction |
    FetchErrorAction |
    FetchAddOrderProductAction |
    FetchOrderProductAction |
    FetchOrdersAction |
    FetchOrderAction |
    FetchOrderPutAction |
    FetchOrderProductClientAction;