import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsDirective } from './customer-details/customer-details.directive';
import { CustomerDataService } from './customer-data/customer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
