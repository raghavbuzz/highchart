import { Component } from '@angular/core';
// import * as Highcharts from "highcharts/highcharts-gantt";

// You can also use the Highcharts instance and import gantt module.

// import * as Highcharts from 'highcharts';
// import HC_gantt from 'highcharts/modules/gantt';
// HC_gantt(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'High Charts Simplified';  

  currentItem = "Hello from Parent";
  // Highcharts: typeof Highcharts = Highcharts;

  // chartOptions: Highcharts.Options = {
  //   title: {
  //     text: "Gantt Chart with Progress Indicators"
  //   },
  //   xAxis: {
  //     min: Date.UTC(2014, 10, 17),
  //     max: Date.UTC(2014, 10, 30)
  //   },
  //   series: [
  //     {
  //       type: "gantt",
  //       name: "Project 1",
  //       data: [
  //         {
  //           name: "Start prototype",
  //           start: Date.UTC(2014, 10, 18),
  //           end: Date.UTC(2014, 10, 25),
  //           completed: 0.25
  //         },
  //         {
  //           name: "Test prototype",
  //           start: Date.UTC(2014, 10, 27),
  //           end: Date.UTC(2014, 10, 29)
  //         },
  //         {
  //           name: "Develop",
  //           start: Date.UTC(2014, 10, 20),
  //           end: Date.UTC(2014, 10, 25),
  //           completed: {
  //             amount: 0.12,
  //             fill: "#fa0"
  //           }
  //         },
  //         {
  //           name: "Run acceptance tests",
  //           start: Date.UTC(2014, 10, 23),
  //           end: Date.UTC(2014, 10, 26)
  //         }
  //       ]
  //     }
  //   ]
  // };
}
