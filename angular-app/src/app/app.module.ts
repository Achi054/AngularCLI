import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsDirective } from './customer-details/customer-details.directive';
import { CustomerDataService } from './customer-data/customer-data.service';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsDirective,
    InitCapsPipe
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
