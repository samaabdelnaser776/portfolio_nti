
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EducationModel } from '../../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  apiUrl = 'http://localhost:5000/api/education';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<EducationModel[]>(this.apiUrl);
  }

  create(education: EducationModel) {
    return this.http.post(this.apiUrl, education);
  }

  update(id: string, education: EducationModel) {
    return this.http.put(`${this.apiUrl}/${id}`, education);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
