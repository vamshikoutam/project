import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  medicines: any[] = [];

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe(data => {
      this.medicines = data;
    });
  }
}
