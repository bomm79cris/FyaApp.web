import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditRegisterComponent } from './credit-register/credit-register.component';

const routes: Routes = [
  { path: '', component: CreditListComponent },
  { path: 'register', component: CreditRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule {}
