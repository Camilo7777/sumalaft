import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  selectedItems: Set<string> = new Set<string>();
  selectedSubItem: string | null = null;

  toggleItem(item: string): void {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
      this.selectedSubItem = null;
    } else {
      this.selectedItems.clear();
      this.selectedItems.add(item);
    }
  }

  isSelected(item: string): boolean {
    return this.selectedItems.has(item);
  }

  seleccionarSubItem(subItem: string): void {
    this.selectedSubItem = subItem;
  }

  isSelectedSubItem(subItem: string): boolean {
    return this.selectedSubItem === subItem;
  }

  calcularAlturaTotal(): string {
    const alturaListaPrincipal = 40;
    const alturaSublista = this.selectedSubItem ? 2 * 30 : 0;
    return `${alturaListaPrincipal + alturaSublista}px`;

  }
}
