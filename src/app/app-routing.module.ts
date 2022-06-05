import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './account/component/services/auth.guard';
import {LoginComponent} from './account/component/login/login.component';
import {RegisterComponent} from './account/component/register/register.component';
import {StuffListComponent} from './users/components/stuff-list/stuff-list.component';
import {EmployeeListComponent} from './employees/components/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './employees/components/create-employee/create-employee.component';
import {EmployeeDetailsComponent} from './employees/components/employee-details/employee-details.component';
import {UpdateEmployeeComponent} from './employees/components/update-employee/update-employee.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'stuff', component: StuffListComponent, canActivate: [AuthGuard]},
  {path: 'employees', component:EmployeeListComponent,canActivate:[AuthGuard]},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
