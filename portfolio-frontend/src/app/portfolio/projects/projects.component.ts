import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project/project.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private projectService: ProjectService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe({
      next: data => {
        this.projects = data;
        this.cdr.detectChanges();
      },
      error: err => console.error(err)
    });
  }
}







 