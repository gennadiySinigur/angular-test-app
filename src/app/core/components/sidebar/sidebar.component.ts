import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user$: Observable<User> = new Observable<User>();
  firstName$: Observable<string> = new Observable<string>();
  lastName$: Observable<string> = new Observable<string>();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getCurrentUserName();
  }

  getCurrentUserName(): void {
    this.user$ = this.authenticationService.user$;
    this.firstName$ = this.user$.pipe(
      map((data) => data.firstName)
    );
    this.lastName$ = this.user$.pipe(
      map((data) => data.lastName)
    )
  }
}
