import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsChartComponent } from './views-chart.component';

describe('ViewsChartComponent', () => {
  let component: ViewsChartComponent;
  let fixture: ComponentFixture<ViewsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
