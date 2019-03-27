import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableServiceService } from './table-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PhoneFormat } from './phone.change';
import { OrderModule } from 'ngx-order-pipe';
import { OrderByPipe } from './order-by.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PhoneFormat,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [ TableServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
