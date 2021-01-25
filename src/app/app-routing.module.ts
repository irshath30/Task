import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditUsercontactComponent} from '../app/edit-usercontact/edit-usercontact.component';
import {AddUsercontactComponent} from '../app/add-usercontact/add-usercontact.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'edit', component: EditUsercontactComponent },
  { path: 'add', component: AddUsercontactComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
