import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AgDateRendererComponent } from './ag-date-renderer.component';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgDropDownComponent } from './ng-drop-down.component';
import { MyCheckBoxComponent } from './my-check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AgDateRendererComponent,
    NgDropDownComponent,
    MyCheckBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
