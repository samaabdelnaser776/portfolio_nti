





import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { EducationService } from '../../core/services/education/education.service';
import { EducationModel } from '../../core/models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent implements OnInit {

  educations: EducationModel[] = [];

  education: EducationModel = {
    institutionname: '',
    degreetype: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  };

  selectedId = '';
  isEditMode = false;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation() {
    this.educationService.getAll().subscribe(data => {
      this.educations = data;
    });
  }

  saveEducation(form: NgForm) {

    if (this.isEditMode) {

      this.educationService
        .update(this.selectedId, this.education)
        .subscribe(() => {
          this.loadEducation();
          this.resetForm(form);
        });

    } else {

      this.educationService
        .create(this.education)
        .subscribe(() => {
          this.loadEducation();
          this.resetForm(form);
        });

    }

  }

  editEducation(education: EducationModel) {
    this.education = { ...education };
    this.selectedId = education._id!;
    this.isEditMode = true;
  }

  deleteEducation(id: string) {
    this.educationService.delete(id).subscribe(() => {
      this.loadEducation();
    });
  }

  resetForm(form: NgForm) {

    form.resetForm();

    this.education = {
      institutionname: '',
      degreetype: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    };

    this.selectedId = '';
    this.isEditMode = false;
  }

}