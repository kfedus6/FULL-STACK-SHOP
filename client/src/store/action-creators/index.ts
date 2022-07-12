import { registration, login, authorization, loginExit } from "../action-creators/userAction";
import {
    fetchProducts, fetchBrands, fetchTypes, fetchProduct,
    fetchCreateBrand, fetchCreateType, fetchCreateProduct, fetchError,
    fetchAddBasketProduct, fetchGetBasketProduct, fetchGetImagesProduct, fetchDeleteBasketProduct,
    fetchAddImagesProduct, fetchAddOrderProduct, fetchGetOrderProduct, fetchGetOrders,
    fetchGetOrder, fetchPutOrder, fetchGetOrderProductClient, fetchDeleteBasketProducts
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
    fetchAddBasketProduct,
    fetchGetBasketProduct,
    fetchGetImagesProduct,
    fetchDeleteBasketProduct,
    fetchAddImagesProduct,
    fetchAddOrderProduct,
    fetchGetOrderProduct,
    fetchGetOrders,
    fetchGetOrder,
    fetchPutOrder,
    fetchGetOrderProductClient,
    fetchDeleteBasketProducts
};