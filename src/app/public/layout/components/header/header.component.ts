import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { MenuItemConfig } from "@shared/models";

@Component({
  selector: 'public-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpenHeaderMenu = false;
  menus: MenuItemConfig[] = [
    {
      name: 'Anasayfa',
      routerLink: '/anasayfa',
      visible: true
    },
    {
      name: 'Hakkında',
      routerLink: '/hakkinda',
      visible: true
    },
    {
      name: 'İletişim',
      routerLink: '/iletisim',
      visible: true
    },
    {
      name: 'Blog',
      routerLink: '/blog',
      visible: true
    },
    {
      name: 'Kariyer',
      routerLink: '/kariyer',
      visible: true
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
  }

  onClickToggle(): void {
    this.isOpenHeaderMenu = !this.isOpenHeaderMenu;
    if (this.isOpenHeaderMenu) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }
}
