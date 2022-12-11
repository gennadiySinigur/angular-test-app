import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

import { LineChart } from '../../models/lineChart';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  createLineChart(
    chartLabels: Array<string>,
    chartDatasetLabel: string,
    chartData: Array<string> | Array<{ x: string; y: number; }>
  ): LineChart {
    return new Chart("MyChart", {
      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "fb",
            data: chartData,
            backgroundColor: 'rgb(41, 98, 255)',
            borderColor: 'rgb(41, 98, 255)',
            borderWidth: 6,
            tension: 0.25,
            pointHoverRadius: 8,
            pointHoverBorderColor: 'white',
            pointHoverBorderWidth: 2
          },
          {
            data: this.transformLabelsForBackgroundFill(chartLabels),
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

  transformLabelsForBackgroundFill(labels: Array<string>): Array<{ x: string, y: number }> {
    return labels.map((element: string): { x: string, y: number } => ({
      x: element,
      y: 0
    }));
  }
}

