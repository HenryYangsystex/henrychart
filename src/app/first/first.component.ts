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
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  items: MenuItem[] | undefined;
  doughnutData: any;
  doughnutOptions: any;
  data: any;
  cols!: any[];
  options: any;
  tableData = [
    { code: 'A001', name: 'Product 1', category: 10, quantity: 10 },
    { code: 'A002', name: 'Product 2', category: 20, quantity: 20 },
    { code: 'A003', name: 'Product 3', category: 30, quantity: 15 },
    { code: 'A004', name: 'Product 4', category: 40, quantity: 12 },
    { code: 'A005', name: 'Product 5', category: 50, quantity: 30 },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'popularity', header: 'Popularity' },
      { field: 'quantity', header: 'Quantity' },
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
        '--text-color-secondary',
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.dataService.getMenuItems().subscribe((data) => {
        this.doughnutData = data;
      });

      // this.dataService.getVerticalBarData().subscribe((data) => {
      //   this.data = data;
      // });

      this.data = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            backgroundColor: documentStyle.getPropertyValue('--pink-500'),
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };

      this.doughnutOptions = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
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
              color: surfaceBorder,
              drawBorder: false,
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
}
