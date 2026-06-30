
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../../models/contact.model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = 'http://localhost:5000/api/contact';

  constructor(private http: HttpClient) {}

  send(message: ContactModel) {     
    return this.http.post(this.apiUrl, message);
  }      

  getAll() {
    return this.http.get<ContactModel[]>(this.apiUrl);
  }
}

