import { createReducer, on } from '@ngrx/store';

import { User } from '../../models/User';
import { login, logout } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    email: '',
    password: ''
  }
}

export const authReducer = createReducer(
  initialState,

  on(login, (state: AuthState, { user }): AuthState => ({
    ...state,
    isAuthenticated: true,
    user: {
      ...user,
      email: user.email,
      password: user.password
    }
  })),

  on(logout, (state: AuthState, { user }): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: {
      ...user,
      email: '',
      password: ''
    }
  })),
);
