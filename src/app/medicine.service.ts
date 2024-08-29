// src/app/medicine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensure this is present
})
export class MedicineService {
  private apiUrl = 'http://localhost:8080/medicines';

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMedicine(medicine: any): Observable<any> {
    return this.http.post(this.apiUrl, medicine);
  }
}
