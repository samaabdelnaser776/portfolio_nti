import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { EducationComponent } from './admin/education/education.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ContactComponent  as AdminContactComponent} from './admin/contact/contact';

import { HomeComponent } from './portfolio/home/home.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ProjectsComponent as PortfolioProjectsComponent } from './portfolio/projects/projects.component';
import { EducationComponent as PortfolioEducationComponent } from './portfolio/education/education.component';
import { SkillsComponent as PortfolioSkillsComponent } from './portfolio/skills/skills.component';
import { LayoutComponent } from './portfolio/layout/layout.component';

export const routes: Routes = [
  
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'edit-user', component: EditUserComponent },
        { path: 'contact', component: AdminContactComponent }
    ]     
  },

  
  {
    path: 'portfolio',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'projects', component: PortfolioProjectsComponent },
      { path: 'skills', component: PortfolioSkillsComponent },
      { path: 'education', component: PortfolioEducationComponent }
      ,{ path: 'contact', component: ContactComponent }
    ]
  },

  
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' }
];