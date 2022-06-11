export interface UserState {
    is_login: boolean,
    is_admin: boolean,
    error: string | null,
    user: Object
};

export enum UserActionTypes {
    FETCH_USER_REGISTRATION = 'FETCH_USER_REGISTRATION',
    FETCH_USER_LOGIN = 'FETCH_USER_LOGIN',
    FETCH_USER_AUTHORIZATION = 'FETCH_USER_AUTHORIZATION',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
};

interface FetchUserRegistrationAction {
    type: UserActionTypes.FETCH_USER_REGISTRATION,
    payload: any
};

interface FetchUserLoginAction {
    type: UserActionTypes.FETCH_USER_LOGIN,
    payload: any
};

interface FetchUserAuthorizationAction {
    type: UserActionTypes.FETCH_USER_AUTHORIZATION,
    payload: any
};

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR,
    payload: string | null
};

export type UserAction =
    FetchUserRegistrationAction |
    FetchUserLoginAction |
    FetchUserAuthorizationAction |
    FetchUserErrorAction;
