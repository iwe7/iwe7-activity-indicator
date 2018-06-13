import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityIndicatorComponent } from './activity-indicator';

@NgModule({
  imports: [CommonModule],
  declarations: [ActivityIndicatorComponent],
  exports: [ActivityIndicatorComponent],
  entryComponents: [ActivityIndicatorComponent]
})
export class Iwe7ActivityIndicatorModule { }
