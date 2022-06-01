export interface UserState {
    users: any[]
};

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS'
};

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS,
    payload: any[]
};

export type UserAction = FetchUserAction;