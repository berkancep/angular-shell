import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { HeaderState } from "./states";

@Component({
  selector: 'private-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Select(HeaderState.getTitle)
  title$: Observable<string>;

  @Select(HeaderState.getColor)
  color$: Observable<string>;
}
