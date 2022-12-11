import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserIntroComponent } from './components/user-intro/user-intro.component';
import { UserTargetsComponent } from './components/user-targets/user-targets.component';
import { UserStateComponent } from './components/user-state/user-state.component';
import { UserStateCardsComponent } from './components/user-state/user-state-cards/user-state-cards.component';
import { LikeIconComponent } from './components/like-icon/like-icon.component';
import { HeartIconComponent } from './components/heart-icon/heart-icon.component';
import { SmileIconComponent } from './components/smile-icon/smile-icon.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserInfoComponent,
    UserIntroComponent,
    UserTargetsComponent,
    UserStateComponent,
    UserStateCardsComponent,
    LikeIconComponent,
    HeartIconComponent,
    SmileIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
