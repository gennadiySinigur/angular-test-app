import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from '../../../core/models/User';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-user-intro',
  templateUrl: './user-intro.component.html',
  styleUrls: ['./user-intro.component.scss']
})
export class UserIntroComponent implements OnInit {
  user$: Observable<User> = new Observable<User>();
  firstName$: Observable<string> = new Observable<string>();
  lastName$: Observable<string> = new Observable<string>();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user$ = this.authenticationService.user$;
    this.firstName$ = this.user$.pipe(
      map((data) => data.firstName)
    );
    this.lastName$ = this.user$.pipe(
      map((data) => data.lastName)
    )
  }

}
