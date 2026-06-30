import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModel } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact/contact.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class ContactComponent {
  constructor(private contactService: ContactService) {}

message: ContactModel = {
  name: '',
  email: '',
  message: ''
};

send() {
  console.log(this.message);

  this.contactService.send(this.message).subscribe({
    next: (res) => {
      console.log('Saved!', res);
      alert('Message sent!');
    },
    error: (err) => {
      console.error(err);
    }
  });}}

  


