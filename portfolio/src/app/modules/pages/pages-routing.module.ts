import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmonComponent } from './admon/admon.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'', component:HomeComponent},
    {path: 'education', component:EducationComponent},
    {path: 'experience', component:ExperienceComponent},
    {path: 'skills', component:SkillsComponent},
    {path: 'admin', component:AdmonComponent}
  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
