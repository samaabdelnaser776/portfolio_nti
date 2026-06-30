
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = 'http://localhost:5000/api/project';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(project: any) {
    return this.http.post(this.apiUrl, project);
  }

  update(id: string, project: any) {
    return this.http.put(`${this.apiUrl}/${id}`, project);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}