import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-views-chart',
  templateUrl: './views-chart.component.html',
  styleUrls: ['./views-chart.component.scss']
})
export class ViewsChartComponent implements OnInit {
  public chart: Chart<"line", string[] | { x: string; y: number; }[], string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr'
        ],
        datasets: [
          {
            label: "fb",
            data: ['2.5', '1.4', '6', '4'],
            backgroundColor: 'rgb(41, 98, 255)',
            borderColor: 'rgb(41, 98, 255)',
            borderWidth: 6,
            tension: 0.25,
            pointHoverRadius: 8,
            pointHoverBorderColor: 'white',
            pointHoverBorderWidth: 2
          },
          {
            data: [
              { x: 'Jan', y: 0 },
              { x: 'Feb', y: 0 },
              { x: 'Mar', y: 0 },
              { x: 'Apr', y: 0 },
            ],
            backgroundColor: 'rgba(41,98,255,0.26)',
            borderColor: 'transparent',
            borderWidth: 0,
            pointRadius: 0,
            fill: 0
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            cornerRadius: 10,
            titleMarginBottom: 10,
          }
        },
        scales: {
          x: {
            grid: {
              color: 'transparent',

            },
            border: {
              display: false
            }
          },
          y: {
            grid: {
              color: 'transparent',
            },
            ticks: {
              display: false
            },
            border: {
              display: false
            }
          }
        },
      }
    });
  }
}
