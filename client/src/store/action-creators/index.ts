import { registration, login, authorization, loginExit, newPassword } from "../action-creators/userAction";
import {
    fetchProducts, fetchBrands, fetchTypes, fetchProduct,
    fetchCreateBrand, fetchCreateType, fetchCreateProduct, fetchError,
    fetchAddBasketProduct, fetchGetBasketProduct, fetchGetImagesProduct, fetchDeleteBasketProduct,
    fetchAddImagesProduct, fetchAddOrderProduct, fetchGetOrderProduct, fetchGetOrders,
    fetchGetOrder, fetchPutOrder, fetchGetOrderProductClient, fetchDeleteBasketProducts,
    fetchGetNewProducts, fetchAddComment, fetchGetComments, fetchDeleteComments
} from "./productAction";

export default {
    registration,
    login,
    authorization,
    loginExit,
    newPassword,
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
    fetchDeleteBasketProducts,
    fetchGetNewProducts,
    fetchAddComment,
    fetchGetComments,
    fetchDeleteComments
};