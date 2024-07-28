import { Component } from '@angular/core';
import { MenuService } from '../../../shared/menu.service'; // Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private menuService: MenuService) {}

  openMenu() {
    this.menuService.toggleSidebar();
  }
}
