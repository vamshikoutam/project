// src/app/add-medicine/add-medicine.component.ts
import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service'; // Make sure this service is correctly used

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {
  medicine = { name: '', category: '', price: '' };

  constructor(private medicineService: MedicineService) { }

  addMedicine() {
    this.medicineService.addMedicine(this.medicine).subscribe((response: any) => {
      console.log('Medicine added:', response);
    });
  }
}
