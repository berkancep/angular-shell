import { CanDeactivate } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Store } from "@ngxs/store";
import { Confirm } from "@shared/actions";
import { Injectable } from "@angular/core";
import { DialogState } from "@shared/states";

export interface CanComponentDeactivate {
  skipCanDeactivate: boolean;
  get hasUnSavedChanges(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class LeavePageGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private store: Store) {
  }

  canDeactivate(component: CanComponentDeactivate) {
    const { hasUnSavedChanges, skipCanDeactivate } = component;
    if (!skipCanDeactivate && hasUnSavedChanges) {
      return this.store.dispatch(new Confirm()).pipe(
        switchMap(() => this.store.selectOnce(DialogState.getIsConfirm)));
    }
    return true;
  }
}
