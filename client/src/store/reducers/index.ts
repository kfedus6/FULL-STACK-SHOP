import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    products: productReducer
});

export type RootState = ReturnType<typeof rootReducers>;