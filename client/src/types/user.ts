export interface UserState {
    is_login: boolean,
    is_admin: boolean,
    user: {}
};

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS'
};

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS,
    payload: any
};

export type UserAction = FetchUserAction;
