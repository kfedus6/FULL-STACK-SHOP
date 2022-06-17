import { Dispatch } from "react";
import { $host } from "../../http";
import { ProductAction, ProductActionTypes } from "../../types/product";

export const fetchProducts = () => async (dispathc: Dispatch<ProductAction>) => {
    try {
        const response = await $host.get('api/product/')
        dispathc({ type: ProductActionTypes.FETCH_PRODUCTS, payload: response.data })
    } catch (e) {
        console.log(e)
    }
};