import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetTitle } from "../header/actions";

@Component({
  selector: 'private-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private store: Store) {
  }

  onChangeHeaderText() {
    this.store.dispatch(new SetTitle('Header kısmında gözükecek olan yazı giriniz'));
  }
}
