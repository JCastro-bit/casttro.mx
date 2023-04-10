// nav.component.ts
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: MenuItem[] = [];
  search: string = '';

  constructor() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/productos'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contacto'
      },
      {
        label: 'Acerca de',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/acerca-de' // Agregar la propiedad 'routerLink' aquí
      }
    ];
  }
}
