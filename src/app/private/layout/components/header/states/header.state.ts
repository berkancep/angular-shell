import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetTitle } from "../actions";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";
import { DialogService } from "@shared/services/custom/dialog.service";

interface HeaderStateModel {
  title: string;
  color: HeaderColor;
}

enum HeaderColor {
  CUSTOM_1 = '#2596be',
  CUSTOM_2 = '#873e23',
  CUSTOM_3 = '#154c79'
}

@State<HeaderStateModel>({
  name: 'header',
  defaults: {
    title: null,
    color: HeaderColor.CUSTOM_1
  }
})
@Injectable()
export class HeaderState {
  constructor(private dialogService: DialogService) {
  }

  @Selector()
  static getTitle({ title }: HeaderStateModel): string {
    return title;
  }

  @Selector()
  static getColor({ color }: HeaderStateModel): string {
    return color;
  }

  @Action(SetTitle)
  setTitle({ patchState }: StateContext<HeaderStateModel>, { payload }: SetTitle) {
    return this.dialogService.prompt(payload).pipe(tap((title: string) => {
      patchState({
        title
      });
    }))
  }
}
