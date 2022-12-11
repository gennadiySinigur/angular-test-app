import { Component, OnInit } from '@angular/core';

import { ChartsService } from '../../services/charts/charts.service';
import { LineChart } from '../../models/lineChart';

@Component({
  selector: 'app-views-chart',
  templateUrl: './views-chart.component.html',
  styleUrls: ['./views-chart.component.scss']
})
export class ViewsChartComponent implements OnInit {
  public chart: LineChart;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = this.chartsService.createLineChart();
  }
}
