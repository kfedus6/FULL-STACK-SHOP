import { Dispatch } from 'react';
import { $host } from '../../http/index';
import { UserAction, UserActionTypes } from '../../types/user';
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

export const registration = (email: string, password: string) => async (dispathc: Dispatch<UserAction>) => {
    try {
        const { data } = await $host.post('api/user/registration', { email, password })
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispathc({ type: UserActionTypes.FETCH_USER_REGISTRATION, payload: { is_admin: user.admin, user: user } })
    } catch (e: any) {
        console.log(e.response.data.message)
    }
};

export const login = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
    //const navigate = useNavigate();
    //Роут на главную страничку
    try {
        const { data } = await $host.post('api/user/login', { email, password })
        localStorage.setItem('token', data.token)
        const user: any = jwt_decode(data.token)
        dispatch({ type: UserActionTypes.FETCH_USER_LOGIN, payload: { is_login: true, is_admin: user.admin, user: user } })
        //navigate("/path/to/push");
    } catch (e: any) {
        console.log(e.response.data.message)
    }
};

export const authorization = () => async (dispatch: Dispatch<UserAction>) => {
    const { data } = await $host.get('api/user/authorization')
    const user: any = jwt_decode(data.token)
    dispatch({ type: UserActionTypes.FETCH_USER_AUTHORIZATION, payload: { is_login: true, is_admin: user.admin, user: user } })
};

