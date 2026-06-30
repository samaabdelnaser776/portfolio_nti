

import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  project: any = {
    title: '',
    description: '',
    githubUrl: '',
    liveUrl: '',
    image: ''
  };

  selectedId = '';
  isEditMode = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAll().subscribe(data => {
        console.log('Projects:', data);
        this.projects = [...data];
      //this.projects = data;
    });
  }

  saveProject(form: NgForm) {
     console.log('Save clicked');
  console.log(this.project);

    if (this.isEditMode) {

      this.projectService.update(this.selectedId, this.project).subscribe({
  next: (res) => {
    console.log('Updated:', res);

    this.loadProjects();

    setTimeout(() => {
      this.resetForm(form);
    }, 200);
  },
  error: (err) => {
    console.error(err);
  }
});

    } else {

      this.projectService
        .create(this.project)
        .subscribe(() => {
          this.loadProjects();
          this.resetForm(form);
        });
    }
  }

  editProject(project: any) {
    this.project = { ...project };
    this.selectedId = project._id;
    this.isEditMode = true;
  }

  deleteProject(id: string) {
    this.projectService.delete(id).subscribe(() => {
      this.loadProjects();
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();

    this.project = {
      title: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
      image: ''
    };

    this.isEditMode = false;
    this.selectedId = '';
  }
}