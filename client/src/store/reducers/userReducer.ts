import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    is_login: false,
    is_admin: false,
    user: Object,

};

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS: {
            return { ...state, users: action.payload }
        }
        default: {
            return state
        }
    }
};