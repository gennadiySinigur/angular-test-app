import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartsService} from '../../services/charts/charts.service';

@Component({
  selector: 'app-views-chart',
  templateUrl: './views-chart.component.html',
  styleUrls: ['./views-chart.component.scss']
})
export class ViewsChartComponent implements OnInit {
  public chart: Chart<"line", string[] | { x: string; y: number; }[], string> | undefined;

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = this.chartsService.createLineChart();
  }
}
