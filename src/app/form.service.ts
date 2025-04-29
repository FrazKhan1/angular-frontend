import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  apiUrl = 'http://localhost:8000/api';


  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(value: boolean) {
    this.loadingSubject.next(value);
  }


  constructor(private http: HttpClient) {}

  addForm(formData: any) {
    return this.http.post(`${this.apiUrl}/create`, formData);
  }

  getFormData() {
    return this.http.get<any[]>(`${this.apiUrl}/get`);
  }

  getFormById(id: string) {
    return this.http.get(`${this.apiUrl}/get-by-id/${id}`);
  }
}
