import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../core/services/contact/contact.service';
import { ContactModel } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {

  messages: ContactModel[] = [];

 constructor(
  private contactService: ContactService,
  private cdr: ChangeDetectorRef
) {}

 ngOnInit(): void {
   console.log('Admin Contact Loaded');

  
this.contactService.getAll().subscribe({
  next: (data) => {
    console.log("API:", data);

    this.messages = data;

    console.log("Messages:", this.messages);
    console.log("Length:", this.messages.length);

    this.cdr.detectChanges();
  }
});
 }}