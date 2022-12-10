import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { authSelector, userSelector } from '../state/auth/auth.selectors';
import { login } from '../state/auth/auth.actions';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated$: Observable<boolean> = this.store.select(authSelector);
  user$: Observable<User> = this.store.select(userSelector);

  constructor(private store: Store<AppState>) { }

  login(email: string, password: string) {
    this.store.dispatch(login({ user: { email, password } }));
  }
}