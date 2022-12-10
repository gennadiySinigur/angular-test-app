import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStateCardsComponent } from './user-state-cards.component';

describe('UserStateCardsComponent', () => {
  let component: UserStateCardsComponent;
  let fixture: ComponentFixture<UserStateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStateCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
