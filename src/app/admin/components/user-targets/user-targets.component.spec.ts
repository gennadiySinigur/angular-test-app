import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTargetsComponent } from './user-targets.component';

describe('UserTargetsComponent', () => {
  let component: UserTargetsComponent;
  let fixture: ComponentFixture<UserTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
