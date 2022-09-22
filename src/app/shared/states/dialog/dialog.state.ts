import { Action, Selector, State, StateContext } from "@ngxs/store";
import { of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { Confirm, Alert, Prompt } from "@shared/actions";

export interface DialogStateModel {
  isConfirm: boolean;
  message: string;
}

@State<DialogStateModel>({
  name: 'dialog',
  defaults: {
    isConfirm: false,
    message: null
  }
})
@Injectable()
export class DialogState {
  @Selector()
  static getIsConfirm({ isConfirm }: DialogStateModel): boolean {
    return isConfirm;
  }

  @Selector()
  static getMessage({ message }: DialogStateModel): string {
    return message;
  }

  @Action(Confirm)
  confirm({ patchState }: StateContext<DialogStateModel>, { payload }: Confirm) {
    return of(confirm(payload || 'Are you sure?')).pipe(tap((isConfirm: boolean) => {
      patchState({
        isConfirm
      });
    }));
  }

  @Action(Alert)
  alert({ patchState }: StateContext<DialogStateModel>, { payload }: Alert) {
    alert(payload);
  }

  @Action(Prompt)
  prompt({ patchState }: StateContext<DialogStateModel>, { payload }: Prompt) {
    return of(prompt(payload)).pipe(tap((message: string) => {
      patchState({
        message
      });
    }));
  }
}
