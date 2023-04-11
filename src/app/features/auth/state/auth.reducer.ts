import { Action, createReducer, on } from '@ngrx/store';
import {login} from './auth.actions';

export const initialState: {username: string, password: string} = {
  username: '',
  password: ''
}


export const loginReducer = createReducer(
  initialState,
  on(login, (state, credentials) => ({...state, username: credentials.username, password: credentials.password}))
);
