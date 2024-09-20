import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    PanelModule,
    MenuModule,
    ButtonModule,
    ChartModule,
    CardModule,
    TableModule,
    CommonModule,
    ProgressBarModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  visitorData: any;
  visitorOptions: any;
  customerData: any;
  customerOptions: any;
  items: MenuItem[] | undefined;
  doughnutData: any;
  doughnutOptions: any;
  verticalBarData: any;
  cols!: any[];
  verticalBarOptions: any;
  tableData = [
    { id: '01', name: 'Home Decor Range', popularity: 80, sales: 45 },
    {
      id: '02',
      name: 'Disney Princess Pink Bag 18',
      popularity: 60,
      sales: 29,
    },
    { id: '03', name: 'Bathroom Essentials', popularity: 50, sales: 18 },
    { id: '04', name: 'Apple Smartwatches', popularity: 35, sales: 25 },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'name', header: 'Name' },
      { field: 'popularity', header: 'Popularity' },
      { field: 'sales', header: 'Sales' },
    ];
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
    ];

    // Ensure this code runs only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--text-color-secondary'
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.dataService.getMenuItems().subscribe((data) => {
        this.doughnutData = data;
      });

      this.dataService.getVerticalBarData().subscribe((data) => {
        this.verticalBarData = data;
        this.verticalBarData.datasets.forEach((dataset: any) => {
          dataset.backgroundColor = documentStyle.getPropertyValue(
            dataset.backgroundColor
          );
          dataset.borderColor = documentStyle.getPropertyValue(
            dataset.borderColor
          );
        });
      });

      this.dataService.getCustomerData().subscribe((data) => {
        this.customerData = data;
        this.customerData.datasets.forEach((dataset: any) => {
          dataset.borderColor = documentStyle.getPropertyValue(
            dataset.borderColor
          );
          dataset.backgroundColor = documentStyle.getPropertyValue(
            dataset.backgroundColor
          );
          dataset.pointBackgroundColor = dataset.borderColor;
        });
      });

      this.dataService.getVisitorData().subscribe((data) => {
        this.visitorData = data;
        this.visitorData.datasets.forEach((dataset: any) => {
          dataset.borderColor = documentStyle.getPropertyValue(
            dataset.borderColor
          );
          dataset.backgroundColor = documentStyle.getPropertyValue(
            dataset.backgroundColor,
          );
        });
      });

      this.doughnutOptions = {
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
      };

      this.verticalBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      this.customerOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
      };

      this.visitorOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              padding: 10,
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
    }
  }

  getClasses(id: any): any {
    return {
      progressbar1: id === '01',
      progressbar2: id === '02',
      progressbar3: id === '03',
      progressbar4: id === '04',
    };
  }

  getButtonClasses(id: any): any {
    return {
      button1: id === '01',
      button2: id === '02',
      button3: id === '03',
      button4: id === '04',
    };
  }
}
