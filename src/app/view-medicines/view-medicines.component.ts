// src/app/view-medicines/view-medicines.component.ts
import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {
  medicines: any[] = [];

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }
}
