import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from "@ngxs/store";
import * as states from './states';
import * as guards from './guards';
import * as components from './components';
import { DialogService } from "@shared/services/custom/dialog.service";

@NgModule({
  declarations: [
    components.RatingInputComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([states.DialogState])
  ],
  exports: [
    components.RatingInputComponent
  ],
  providers: [
    guards.LeavePageGuard,
    DialogService
  ]
})
export class SharedModule {
}
