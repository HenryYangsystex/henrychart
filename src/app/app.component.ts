import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule, CommonModule, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-plus',
      },
      {
        label: 'Leaderboard',
        icon: 'pi pi-plus',
      },
      {
        label: 'Order',
        icon: 'pi pi-plus',
      },
      {
        label: 'Products',
        icon: 'pi pi-plus',
      },
      {
        label: 'Sales Report',
        icon: 'pi pi-plus',
      },
      {
        label: 'Message',
        icon: 'pi pi-plus',
      },
      {
        label: 'Settings',
        icon: 'pi pi-plus',
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-plus',
      },
    ];
  }
}
