import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //variables

  acercaDe:string[]=["Estudiante de Gestión y Desarrollo de Software, con un gran interés en Desarrollo Web Back End. Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional.En busca de una oportunidad laboral en la que pueda adaptar, desarrollar o mejorar mis habilidades adquiridas durante mi tiempo de estudio."]
  constructor() { }

  ngOnInit(): void {
  }

}
