import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleGridComponent } from './simple-grid.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleGridComponent],
  exports:[SimpleGridComponent]
})
export class SimpleGridModule { }
