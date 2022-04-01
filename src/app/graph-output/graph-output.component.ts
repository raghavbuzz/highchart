import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highcharts-gantt";

@Component({
  selector: 'app-graph-output',
  templateUrl: './graph-output.component.html',
  styleUrls: ['./graph-output.component.css']
})
export class GraphOutputComponent implements OnInit {

  // variables
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  map = Highcharts.map;


  projectDetails: any[] = [];
  series: any[] = [];
  today = new Date();
  day = 1000 * 60 * 60 * 24;

  constructor() { }

  ngOnInit(): void {
    
    this.initializeData();
    this.setSeries();    
    this.chartOptions = {
      title: {
        text: "Gantt Chart with Progress Indicators"
      },
      xAxis: {
        min: Date.UTC(2014, 1, 1),
        max: Date.UTC(2014, 11, 30),        
      },
      yAxis: {
        type: 'category',
        // alternateGridColor: 'rgba(255, 0, 0, 0.4)',
        // gridLineDashStyle: 'Dot',                     
        grid: {
          columns: [{            
            title: {
              text: 'Stage Name'
            },
            categories: this.map(this.series, function (s: any) {
              return s.data[0].name;
            }),
            // gridLineColor: 'rgba(226, 245, 39, 0.8)'
          }, {
            title: {
              text: 'Project'
            },
            categories: this.map(this.series, function (s: any) {
              return s.name;
            })
          }, {
            title: {
              text: 'Stage Number'
            },
            categories: this.map(this.series, function (s: any) {
              return s.data[0].stage;
            })
          }]
        },        
        stackLabels: {          
          enabled: false,
          // style: {
          //   fontWeight: 'bold',
          //   color: 'blue',
          //   backgroundColor: 'yellow'
          // }
        }
      },
      scrollbar: {
        enabled: true,
        showFull: false
      },
      rangeSelector: {
          enabled: true,
          selected: 0
      },
      series: [
        {
          "name": "Project 1",
          "data": [
            {
              "id": "stage-0",
              "name": "Start prototype",              
              "start": 1416268800000,
              "end": 1416873600000,
              "y": 0,
              description: "some text",
              color: 'rgba(140, 140, 140, 0.7)'
            },
            {
              "id": "stage-0",
              "name": "Takted Station",
              "start": 1417305600000,
              "end": 1418169600000,
              "y": 0,
              color: 'rgba(140, 140, 140, 0.7)'
            },
            {
              "id": "stage-0",
              "name": "CDF",
              "start": 1417132800000,
              "y": 0,
              "milestone": true,
              color: 'rgba(140, 140, 140, 0.7)'
            }
          ],
          "type": "gantt",
          dataLabels: {
            // style: {
            //   backgroundColor: '#9a383d'
            // }
          }
        },
        {
          "name": "Project 2",
          "data": [
            {
              "id": "stage-1",
              "name": "Test prototype",              
              "start": 1417046400000,
              "end": 1417219200000,
              "y": 1
            }
          ],
          "type": "gantt",          
        },
        {
          "name": "Project 3",
          "data": [
            {
              "id": "stage-2",
              "name": "Develop",              
              "start": 1416441600000,
              "end": 1416873600000,
              "y": 2
            }
          ],
          "type": "gantt",          
        },
        {
          "name": "Project 4",
          "data": [
            {
              "id": "stage-3",
              "name": "Run acceptance tests",              
              "start": 1416700800000,
              "end": 1416960000000,
              "y": 3
            }
          ],
          "type": "gantt",         
        }
      ],
      chart: {
        styledMode: false,    
        width: 1180,
        colorCount: 1,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        marginRight: 10,
        plotBorderWidth: 1,
        style: {
          // fontWeight: 'bold',
          // fontSize: '12',
          // color: 'rgba(245, 40, 145, 0.8)',            
          // // color: 'rgba(245, 40, 145, 0.8)',
          // backgroundColor: 'rgba(255,255,255,1)'          
        }        
      }      
    };    
    console.log(JSON.stringify(this.chartOptions));
  }

  public initializeData() {
    this.projectDetails = [
      {
        type: "gantt",
        name: "Project 1",
        data: [
          {
            name: "Start prototype",
            stage: "1",
            start: Date.UTC(2014, 10, 18),
            end: Date.UTC(2014, 10, 25),
            completed: 0.25
          },
          {
            name: "Takted Station",
            start: Date.UTC(2014, 10, 30),
            end: Date.UTC(2014, 11, 10),
          },
          {
            name: "CDF",
            milestone: true,
            start: Date.UTC(2014, 10, 28),            
          }
        ]
      },
      {
        type: "gantt",
        name: "Project 2",
        data: [
          {
            name: "Test prototype",
            stage: "2",
            start: Date.UTC(2014, 10, 27),
            end: Date.UTC(2014, 10, 29),
            completed: 0.25
          }
        ]
      },
      {
        type: "gantt",
        name: "Project 3",
        data: [
          {
            name: "Develop",
            stage: "3",
            start: Date.UTC(2014, 10, 20),
            end: Date.UTC(2014, 10, 25),
            completed: {
              amount: 0.12,
              fill: "#fa0"
            }
          }
        ]
      },
      {
        type: "gantt",
        name: "Project 4",
        data: [
          {
            name: "Run acceptance tests",
            stage: "4",
            start: Date.UTC(2014, 10, 23),
            end: Date.UTC(2014, 10, 26)
          }
        ]
      }
    ];
  }

  public setSeries() {
    this.series = this.projectDetails.map(function (itemProjDetail, i) {
      var data = itemProjDetail.data.map(function (item: any) {
        return {
          id: 'stage-' + i,
          name: item.name,
          stage: item.stage,
          start: item.start,
          end: item.end,
          y: i,
          milestone: item.milestone,
          backgroundColor: item.backgroundColor
        };
      });
      return {
        name: itemProjDetail.name,
        data: data,
        type: itemProjDetail.type,
        className: 'series-1-custom-css',
      };
    })
  }  
}
