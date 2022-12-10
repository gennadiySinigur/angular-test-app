import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import { AuthState } from './auth.reducer';

export const selectAuth = (state: AppState) => state.auth;

export const authSelector = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuthenticated
);

export const userSelector = createSelector(
  selectAuth,
  (state: AuthState) => state.user
)
