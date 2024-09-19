import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { FirstComponent } from './first/first.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    MenuModule,
    CommonModule,
    FirstComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: MenuItem[] | undefined;

  sideBarLogoImgSrc: string = '/assets/image/dummy%20logo.png';

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-pie',
      },
      {
        label: 'Leaderboard',
        icon: 'pi pi-chart-bar',
      },
      {
        label: 'Order',
        icon: 'pi pi-shopping-cart',
      },
      {
        label: 'Products',
        icon: 'pi pi-shopping-bag',
      },
      {
        label: 'Sales Report',
        icon: 'pi pi-chart-line',
      },
      {
        label: 'Message',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
      },
    ];
  }
}
