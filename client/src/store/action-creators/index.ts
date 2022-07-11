import { registration, login, authorization, loginExit } from "../action-creators/userAction";
import {
    fetchProducts, fetchBrands, fetchTypes, fetchProduct,
    fetchCreateBrand, fetchCreateType, fetchCreateProduct, fetchError,
    fetchAddBasket, fetchGetBasketProduct, fetchGetImagesProduct, fetchDeleteBasketProduct,
    fetchAddImagesProduct, fetchAddOrderProduct, fetchGetOrderProduct, fetchGetOrders,
    fetchGetOrder, fetchPutOrder, fetchGetOrderProductClient
} from "./productAction";

export default {
    registration,
    login,
    authorization,
    loginExit,
    fetchProducts,
    fetchBrands,
    fetchTypes,
    fetchProduct,
    fetchCreateBrand,
    fetchCreateType,
    fetchCreateProduct,
    fetchError,
    fetchAddBasket,
    fetchGetBasketProduct,
    fetchGetImagesProduct,
    fetchDeleteBasketProduct,
    fetchAddImagesProduct,
    fetchAddOrderProduct,
    fetchGetOrderProduct,
    fetchGetOrders,
    fetchGetOrder,
    fetchPutOrder,
    fetchGetOrderProductClient
};