import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries, ApexResponsive, ApexChart, ApexAxisChartSeries, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("pieChart") pieChart!: ChartComponent;
  @ViewChild("barChart") barChart!: ChartComponent;
  
  public pieChartOptions: PieChartOptions;
  public barChartOptions: BarChartOptions;

  displayedColumns: string[] = ['isbn', 'bookName', 'author', 'publication', 'quantity', 'price', 'branch', 'details', 'studentRollNo', 'issuedOnDate', 'studentName'];
  dataSource = [
    { 
      isbn: '1234567890123', 
      bookName: 'Book 1', 
      author: 'Author 1', 
      publication: 'Pub 1', 
      quantity: 10, 
      price: 100, 
      branch: 'IT', 
      details: 'Details 1', 
      studentRollNo: '001', 
      issuedOnDate: '2024-06-01', 
      studentName: 'John Doe' 
    },
    { 
      isbn: '1234567890124', 
      bookName: 'Book 2', 
      author: 'Author 2', 
      publication: 'Pub 2', 
      quantity: 15, 
      price: 150, 
      branch: 'Civil', 
      details: 'Details 2', 
      studentRollNo: '002', 
      issuedOnDate: '2024-06-02', 
      studentName: 'Jane Doe' 
    },
    { 
      isbn: '1234567890125', 
      bookName: 'Book 3', 
      author: 'Author 3', 
      publication: 'Pub 3', 
      quantity: 20, 
      price: 200, 
      branch: 'Mechanical', 
      details: 'Details 3', 
      studentRollNo: '003', 
      issuedOnDate: '2024-06-03', 
      studentName: 'Alice Smith' 
    },
    // Add more data as needed
  ];
  

  constructor() {
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }]
    };

    this.barChartOptions = {
      series: [{
        name: "No. of Books",
        data: [8, 12, 7, 4, 6] 
      }],
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false
        }
      },
      title: {
        text: "No. of Books for Each Person",
        align: "left"
      },
      xaxis: {
        categories: ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"]
      }
    };
  }

  ngOnInit(): void {}
}
