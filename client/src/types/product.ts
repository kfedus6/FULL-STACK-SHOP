export interface ProductState {
    types: [],
    brands: [],
    basket: [],
    orderProduct: [],
    orderProductClient: [],
    orders: [],
    order: [],
    products: { count: number, rows: {} },
    newProducts: [],
    product: {},
    comments: [],
    imagesProduct: [],
    productColor: [],
    carouselImages: [],
    error: string | null
};

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_ADD_PRODUCT = 'FETCH_ADD_PRODUCT',
    FETCH_DELETE_PRODUCT = 'FETCH_DELETE_PRODUCT',
    FETCH_NEW_PRODUCT = 'FETCH_NEW_PRODUCT',
    FETCH_BRANDS = 'FETCH_BRANDS',
    FETCH_ADD_BRANDS = 'FETCH_ADD_BRANDS',
    FETCH_TYPES = 'FETCH_TYPES',
    FETCH_ADD_TYPES = 'FETCH_ADD_TYPES',
    FETCH_BASKET = 'FETCH_BASKET',
    FETCH_ADD_BASKET_PRODUCT = 'FETCH_ADD_BASKET',
    FETCH_DELETE_BASKET_PRODUCT = 'FETCH_DELETE_BASKET',
    FETCH_DELETE_BASKET_PRODUCTS = 'FETCH_DELETE_BASKET_PRODUCTS',
    FETCH_ADD_IMAGES_PRODUCT = 'FETCH_ADD_IMAGES_PRODUCT',
    FETCH_GET_IMAGES_PRODUCT = 'FETCH_GET_IMAGES_PRODUCT',
    FETCH_GET_IMAGE_PRODUCT = 'FETCH_GET_IMAGE_PRODUCT',
    FETCH_ADD_PRODUCT_COLOR = 'FETCH_ADD_PRODUCT_COLOR',
    FETCH_GET_PRODUCT_COLOR = 'FETCH_GET_PRODUCT_COLOR',
    FETCH_ERROR_PRODUCT = 'FETCH_ERROR_PRODUCT',
    FETCH_ADD_ORDER_PRODUCT = 'FETCH_ADD_ORDER',
    FETCH_ORDER_PRODUCT = 'FETCH_ORDER_PRODUCT',
    FETCH_ORDERS = 'FETCH_ORDERS',
    FETCH_ORDER = 'FETCH_ORDER',
    FETCH_PUT_ORDER = 'FETCH_PUT_ORDER',
    FETCH_ORDER_PRODUCT_CLIENT = 'FETCH_ORDER_PRODUCT_CLIENT',
    FETCH_ADD_COMMENT = 'FETCH_ADD_COMMENT',
    FETCH_GET_COMMENTS = 'FETCH_GET_COMMENTS',
    FETCH_DELETE_COMMENT = 'FETCH_DELETE_COMMENT',
    FETCH_POST_CAROUSEL = 'FETCH_POST_CAROUSEL',
    FETCH_GET_CAROUSEL = 'FETCH_GET_CAROUSEL',
    FETCH_DELETE_CAROUSEL = 'FETCH_DELETE_CAROUSEL'
};

interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS,
    payload: {}
};

interface FetchDeleteProductAction {
    type: ProductActionTypes.FETCH_DELETE_PRODUCT,
    payload: []
};

interface FetchNewProductAction {
    type: ProductActionTypes.FETCH_NEW_PRODUCT,
    payload: []
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
    type: ProductActionTypes.FETCH_GET_IMAGES_PRODUCT,
    payload: []
}

interface FetchImageProductAction {
    type: ProductActionTypes.FETCH_GET_IMAGE_PRODUCT,
    payload: []
}

interface FetchAddImagesProductAction {
    type: ProductActionTypes.FETCH_ADD_IMAGES_PRODUCT,
    payload: []
}

interface FetchAddProductColorAction {
    type: ProductActionTypes.FETCH_ADD_PRODUCT_COLOR,
    payload: []
}

interface FetchGetProductColorAction {
    type: ProductActionTypes.FETCH_GET_PRODUCT_COLOR,
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

interface FetchAddCommentAction {
    type: ProductActionTypes.FETCH_ADD_COMMENT,
    payload: []
};

interface FetchGetCommentAction {
    type: ProductActionTypes.FETCH_GET_COMMENTS,
    payload: []
};

interface FetchDeleteCommentAction {
    type: ProductActionTypes.FETCH_DELETE_COMMENT,
    payload: []
};

interface FetchPostCarouselAction {
    type: ProductActionTypes.FETCH_POST_CAROUSEL,
    payload: []
};

interface FetchGetCarouselAction {
    type: ProductActionTypes.FETCH_GET_CAROUSEL,
    payload: []
};

interface FetchDeleteCarouselAction {
    type: ProductActionTypes.FETCH_DELETE_CAROUSEL,
    payload: []
};

export type ProductAction =
    FetchProductsAction |
    FetchProductAction |
    FetchDeleteProductAction |
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
    FetchImageProductAction |
    FetchAddImagesProductAction |
    FetchErrorAction |
    FetchAddOrderProductAction |
    FetchOrderProductAction |
    FetchOrdersAction |
    FetchOrderAction |
    FetchOrderPutAction |
    FetchOrderProductClientAction |
    FetchNewProductAction |
    FetchAddCommentAction |
    FetchGetCommentAction |
    FetchDeleteCommentAction |
    FetchGetProductColorAction |
    FetchAddProductColorAction |
    FetchPostCarouselAction |
    FetchGetCarouselAction |
    FetchDeleteCarouselAction;