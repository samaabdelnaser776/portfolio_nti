import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../core/services/education/education.service';
import { EducationModel } from '../../core/models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {

  educations: EducationModel[] = [];

  
  constructor(
    private educationService: EducationService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    console.log('Education Component Loaded');

    
    this.educationService.getAll().subscribe({
      next: (data) => {
        console.log('Education Data:', data);
        this.educations = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error fetching education records:', err);
      }
    });
  }
}