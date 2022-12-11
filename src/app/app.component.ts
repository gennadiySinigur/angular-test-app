import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-test-app';
  currentRoute: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  getCurrentRoute(): void {
    this.router.events.pipe(
      filter((event: any): boolean => event instanceof NavigationEnd)
    ).subscribe((event: { url: string; }) => {
      this.currentRoute = event.url;
    })
  }

  isLoginPage(): boolean {
    return this.currentRoute === '/login';
  }
}
