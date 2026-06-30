

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillModel as Skill } from '../../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  apiUrl = 'http://localhost:5000/api/skills';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  create(skill: Skill) {
    return this.http.post(this.apiUrl, skill);
  }

  update(id: string, skill: Skill) {
    return this.http.put(`${this.apiUrl}/${id}`, skill);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}