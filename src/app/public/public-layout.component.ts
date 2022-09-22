import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'public-layout',
  template: `
    <public-header></public-header>
    <router-outlet></router-outlet>
    <public-footer></public-footer>
  `
})
export class PublicLayoutComponent {

}
