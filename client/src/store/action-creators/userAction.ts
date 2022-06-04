import { Dispatch } from 'react';
import { $host } from '../../http/index';
import { UserAction, UserActionTypes } from '../../types/user';


export const authorization = (email: string, password: string) => async (dispatch: Dispatch<UserAction>) => {
    console.log('123')
    console.log(process.env.REACT_APP_API_URL)
    const data = await $host.post('api/user/login', { email, password })
    console.log(data)
    dispatch({ type: UserActionTypes.FETCH_USERS, payload: '5' })
}
