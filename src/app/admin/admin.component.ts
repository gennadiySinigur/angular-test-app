import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthenticationService } from '../core/services/authentication.service';
import { User } from '../core/models/User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user$: Observable<User> = new Observable<User>();
  firstName$: Observable<string> = new Observable<string>();
  lastName$: Observable<string> = new Observable<string>();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$ = this.authenticationService.user$;
    this.firstName$ = this.user$.pipe(
      map((data) => data.firstName)
    );
    this.lastName$ = this.user$.pipe(
      map((data) => data.lastName)
    )
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
