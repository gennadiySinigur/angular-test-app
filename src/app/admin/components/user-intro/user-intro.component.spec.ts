import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIntroComponent } from './user-intro.component';

describe('UserIntroComponent', () => {
  let component: UserIntroComponent;
  let fixture: ComponentFixture<UserIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
