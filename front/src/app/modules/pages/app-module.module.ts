import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModuleModule { }
