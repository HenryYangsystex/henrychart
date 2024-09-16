import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { DataService } from '../data.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [PanelModule, MenuModule, ButtonModule, ChartModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  items: MenuItem[] | undefined;
  data: any;
  options: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
    ];

    // Ensure this code runs only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.dataService.getMenuItems().subscribe((data) => {
        this.data = data;
      });

      // this.data = {
      //   labels: ['A', 'B', 'C'],
      //   datasets: [
      //     {
      //       data: [300, 50, 100],
      //       backgroundColor: [
      //         documentStyle.getPropertyValue('--blue-500'),
      //         documentStyle.getPropertyValue('--yellow-500'),
      //         documentStyle.getPropertyValue('--green-500'),
      //       ],
      //       hoverBackgroundColor: [
      //         documentStyle.getPropertyValue('--blue-400'),
      //         documentStyle.getPropertyValue('--yellow-400'),
      //         documentStyle.getPropertyValue('--green-400'),
      //       ],
      //     },
      //   ],
      // };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
      };
    }
  }
}
