import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditRegisterComponent } from './credit-register/credit-register.component';
import { CreditsRoutingModule } from './credits-routing.module';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    CreditListComponent,
    CreditRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    PaginatorModule,
    CreditsRoutingModule
  ]
})
export class CreditsModule {}
