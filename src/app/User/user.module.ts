import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    SweetAlert2Module
  ]
})
export class UserModule { }
