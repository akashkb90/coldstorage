import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/customer-details/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer-details/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './components/customer-details/view-customer/view-customer.component';
import { LoginComponent } from './components/login/login.component';
import { LoansComponent } from './components/loans/loans.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  { path: "", component: CustomerDetailsComponent, canActivate:[AuthguardService],pathMatch:"full" },
  { path: "add-customer", component: AddCustomerComponent},

  { path: "edit-customer/:id", component: EditCustomerComponent },
  { path: "view-customer", component: ViewCustomerComponent },
  { path: "view-loans", component: LoansComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
