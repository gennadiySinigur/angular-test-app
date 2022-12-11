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
  public chartDataLabels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr'];
  public chartDatasetLabel: string = 'fb';
  public chartData: Array<string> = ['2.5', '1.4', '6', '4'];

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = this.chartsService.createLineChart(
      this.chartDataLabels,
      this.chartDatasetLabel,
      this.chartData
    );
  }
}
