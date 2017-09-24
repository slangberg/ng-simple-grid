import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SimpleGridModule} from './simple-grid/simple-grid.module';
import {SampleCellComponent} from './sample-cell/sample-cell.component';
import { OutputTrimPipe } from './output-trim.pipe';
import { ToggleInputComponent } from './toggle-input/toggle-input.component';
@NgModule({
  declarations: [
    AppComponent,
    SampleCellComponent,
    OutputTrimPipe,
    ToggleInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
