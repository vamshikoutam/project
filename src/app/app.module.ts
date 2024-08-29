import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'; // Example component
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'; // Example component
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component'; // Example component
import { MedicineService } from './medicine.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    AdminDashboardComponent, // Ensure all components are declared
    UserDashboardComponent,
    ViewMedicinesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ensure FormsModule is in imports
  ],
  providers: [MedicineService], // Provide your service
  bootstrap: [AppComponent]
})
export class AppModule { }
