import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AdmonComponent } from './admon/admon.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';


import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AboutComponent,
    AdmonComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    SkillsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule

  ]
})
export class AppModuleModule { }
