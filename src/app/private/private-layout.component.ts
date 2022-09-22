import { Component } from '@angular/core';

@Component({
  selector: 'private-layout',
  styleUrls: ['./private-layout.component.scss'],
  template: `
      <div class="layout-container">
          <div class="layout-header">
              <private-header></private-header>
          </div>
          <div class="content-large">
              <router-outlet></router-outlet>
          </div>
          <div class="content-small">Content #2</div>
          <div class="content-small">Content #3</div>
          <div class="footer">
              <private-footer></private-footer>
          </div>
      </div>
  `
})
export class PrivateLayoutComponent {

}
