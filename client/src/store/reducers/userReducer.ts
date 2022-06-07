import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    is_login: false,
    is_admin: false,
    error: null,
    user: {}
};

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_REGISTRATION: {
            return { ...state, is_admin: action.payload.is_admin, user: action.payload.user }
        }
        case UserActionTypes.FETCH_USER_LOGIN: {
            return { ...state, is_login: action.payload.is_login, is_admin: action.payload.is_admin, user: action.payload.user }
        }
        case UserActionTypes.FETCH_USER_AUTHORIZATION: {
            return { ...state }
        }
        case UserActionTypes.FETCH_USER_ERROR: {
            return { ...state, error: action.payload }
        }
        default: {
            return state
        }
    }
};