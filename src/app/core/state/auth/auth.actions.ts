import { createAction, props } from '@ngrx/store';

import { User } from '../../models/User';
import { ActionTypes } from '../action-types';

export const login = createAction(
  ActionTypes.LOGIN,
  props<{ user: User }>(),
);

export const logout = createAction(
  ActionTypes.LOGOUT,
  props<{ user: User }>(),
)
