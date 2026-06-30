import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../core/services/skill/skill.service';
import { SkillModel } from '../../core/models/skill.model';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills: SkillModel[] = [];

  constructor(
  private skillService: SkillService,
  private cdr: ChangeDetectorRef
) {}

 ngOnInit(): void {

  console.log('Skills Component Loaded');

  this.skillService.getAll().subscribe({
  next: (data) => {
    console.log('Data:', data);

    this.skills = data;

    this.cdr.detectChanges();
  },
  error: (err) => console.error(err)
});

}

}