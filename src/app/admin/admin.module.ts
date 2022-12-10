import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserIntroComponent } from './components/user-intro/user-intro.component';
import { UserTargetsComponent } from './components/user-targets/user-targets.component';
import { UserStateComponent } from './components/user-state/user-state.component';
import { UserStateCardsComponent } from './components/user-state/user-state-cards/user-state-cards.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserInfoComponent,
    UserIntroComponent,
    UserTargetsComponent,
    UserStateComponent,
    UserStateCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
