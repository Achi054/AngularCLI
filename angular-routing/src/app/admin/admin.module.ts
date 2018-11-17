import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmailComponent } from './email/email.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [EmailComponent, UserComponent, AdminComponent]
})
export class AdminModule { }
