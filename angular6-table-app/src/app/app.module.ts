import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableServiceService } from './table-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneFormat } from './phone.change';
@NgModule({
  declarations: [
    AppComponent,
    PhoneFormat
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ TableServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
