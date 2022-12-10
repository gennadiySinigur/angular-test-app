import { Component, OnInit } from '@angular/core';

import { UtilsService } from '../../../../shared/services/utils.service';

@Component({
  selector: 'app-user-state-cards',
  templateUrl: './user-state-cards.component.html',
  styleUrls: ['./user-state-cards.component.scss']
})
export class UserStateCardsComponent implements OnInit {
  likesCount: number = 0;
  heartsCount: number = 0;
  smilesCount: number = 0;
  MIN: number = 30000;
  MAX: number = 50000;

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.getRandomReactions(this.MIN, this.MAX);
  }

  getRandomReactions(min: number, max: number): void {
    this.likesCount = this.utilsService.getRandomNumberInRange(min, max);
    this.heartsCount = this.utilsService.getRandomNumberInRange(min, max);
    this.smilesCount = this.utilsService.getRandomNumberInRange(min, max);
  }
}
