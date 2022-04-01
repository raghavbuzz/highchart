import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { GraphOutputComponent } from './graph-output/graph-output.component';
import { MySvgComponent } from './my-svg/my-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphOutputComponent,
    MySvgComponent
  ],
  imports: [
    BrowserModule, FormsModule, HighchartsChartModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
