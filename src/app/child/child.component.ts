import { AfterViewInit, Component, OnInit } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit{
  myBarChart: any = [];
  canvas: any;
  ctx: any;
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [{
          label: ' Peso',
          data: [75, 82, 83],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 5
        }]
      },
      // options: {
      //   legend: {
      //     display: false,
      //   },
      //   responsive: false,
      //   scales: {
      //     xAxes: [{
      //       stacked: true
      //     }],
      //     yAxes: [{
      //       stacked: true
      //     }]
      //   }
      // }
    });
  }
}
