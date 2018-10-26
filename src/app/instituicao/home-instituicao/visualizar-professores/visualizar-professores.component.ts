import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../professor/professor.model';
import { ProfessorService } from '../../../professor/professor.service';

@Component({
  selector: 'usam-visualizar-professores',
  templateUrl: './visualizar-professores.component.html',
  styleUrls: ['./visualizar-professores.component.css']
})
export class VisualizarProfessoresComponent implements OnInit {

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.loadProfessores();
  }

  listProfessores: Professor[];

  loadProfessores() {
    this.professorService.getAllProfessores().subscribe(
      data => this.listProfessores = data
    );
  }

}
