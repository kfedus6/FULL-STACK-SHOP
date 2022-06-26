import { Dispatch } from 'react';
import { $host, $authHost } from '../../http/index';
import { UserAction, UserActionTypes } from '../../types/user';
import jwt_decode from "jwt-decode";

export const registration = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
        const { data } = await $host.post('api/user/registration', { email, password })
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispatch({ type: UserActionTypes.FETCH_USER_REGISTRATION, payload: { is_admin: user.admin, user: user, is_login: true } })
    } catch (err: any) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: err.response.data.message })
    }
};

export const login = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
        const { data } = await $host.post('api/user/login', { email, password })
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispatch({ type: UserActionTypes.FETCH_USER_LOGIN, payload: { is_login: true, is_admin: user.admin, user: user } })
    } catch (err: any) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: err.response.data.message })
    }
};

export const authorization = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        const { data } = await $authHost.get('api/user/authorization')
        const user: any = jwt_decode(data.token)
        dispatch({ type: UserActionTypes.FETCH_USER_AUTHORIZATION, payload: { is_login: true, is_admin: user.admin, user: user } })
    }
    catch {
        dispatch({ type: UserActionTypes.FETCH_USER_AUTHORIZATION, payload: { is_login: false, is_admin: false, user: {} } })
    }
};

export const loginExit = () => async (dispatch: Dispatch<UserAction>) => {
    localStorage.removeItem('token')
    dispatch({ type: UserActionTypes.FETCH_USER_LOGINEXIT, payload: { is_login: false, is_admin: false, user: {} } })
}

