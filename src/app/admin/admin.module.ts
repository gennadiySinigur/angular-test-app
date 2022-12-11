import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { ViewsChartComponent } from './components/views-chart/views-chart.component';

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
    SmileIconComponent,
    ViewsChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
