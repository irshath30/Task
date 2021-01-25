import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUsercontactComponent } from './add-usercontact/add-usercontact.component';
import { EditUsercontactComponent } from './edit-usercontact/edit-usercontact.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddUsercontactComponent,
    EditUsercontactComponent,
    UsercontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
