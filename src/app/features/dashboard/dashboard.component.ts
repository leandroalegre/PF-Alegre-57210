import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.toggleSidebar$.subscribe(() => {
      this.drawer.toggle();
    });
  }
}
