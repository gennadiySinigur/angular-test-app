import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { UtilsService } from '../../../shared/services/utils.service';
import { UsersApiService } from '../../services/users-api/users-api.service';
import { RandomUser } from '../../models/randomUser';

@Component({
  selector: 'app-user-targets',
  templateUrl: './user-targets.component.html',
  styleUrls: ['./user-targets.component.scss'],
})
export class UserTargetsComponent implements OnInit {
  viewsPercent: number = 0;
  followersPercent: number = 0;
  incomePercent: number = 0;
  MIN: number = 50;
  MAX: number = 95;
  FULL_PROGRESS_BAR_PERCENT: number = 100;

  randomUser$: Observable<RandomUser> = new Observable<RandomUser>();

  constructor(
    private utilsService: UtilsService,
    private usersApiService: UsersApiService,
  ) { }

  ngOnInit(): void {
    this.getRandomUser();
    this.getRandomPercent(this.MIN, this.MAX);
  }

  getRandomUser(): void {
    this.randomUser$ = this.usersApiService.getRandomUser();
  }

  getRandomPercent(min: number, max: number): void {
    this.viewsPercent = this.utilsService.getRandomNumberInRange(min, max);
    this.followersPercent = this.utilsService.getRandomNumberInRange(min, max);
    this.incomePercent = this.utilsService.getRandomNumberInRange(min, max);
  }

  getTranslateXValue(targetsPercent: number): string {
    return `translateX(-${this.FULL_PROGRESS_BAR_PERCENT - targetsPercent}%)`;
  }
}
