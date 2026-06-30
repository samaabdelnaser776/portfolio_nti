import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';

import { SkillService  } from '../../core/services/skill/skill.service';
import { SkillModel } from '../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})


  export class SkillsComponent implements OnInit {

  skills: SkillModel[] = [];

skill: SkillModel = {
  name: ''
};

  selectedId = '';
  isEditMode = false;

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skillService.getAll().subscribe(data => {
      this.skills = data;
    });
  }

  saveSkill(form: NgForm) {

    if (this.isEditMode) {

      this.skillService.update(this.selectedId, this.skill)
        .subscribe(() => {
          this.loadSkills();
          this.resetForm(form);
        });

    } else {

      this.skillService.create(this.skill)
        .subscribe(() => {
          this.loadSkills();
          this.resetForm(form);
        });
    }
  }

  editSkill(skill: SkillModel) {
    this.skill = { ...skill };
    this.selectedId = skill._id!;
    this.isEditMode = true;
  }

  deleteSkill(id: string) {
    this.skillService.delete(id)
      .subscribe(() => {
        this.loadSkills();
      });
  }

  resetForm(form: NgForm) {
    form.resetForm();

    this.skill = {
      name: ''
    };

    this.selectedId = '';
    this.isEditMode = false;
  }

}
