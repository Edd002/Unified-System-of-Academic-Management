import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../disciplina/disciplina.model';
import { DisciplinaService } from '../../../disciplina/disciplina.service';

@Component({
  selector: 'usam-visualizar-disciplinas',
  templateUrl: './visualizar-disciplinas.component.html',
  styleUrls: ['./visualizar-disciplinas.component.css']
})
export class VisualizarDisciplinasComponent implements OnInit {

  listDisciplinas: Disciplina[];
  query: string;

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.loadDisciplinas();
  }

  loadDisciplinas() {
    this.disciplinaService.getAllDisciplinas().subscribe(
      data => this.listDisciplinas = data
    );
  }

  searchDisciplinas() {
    this.disciplinaService.getAllDisciplinasBySearch(this.query).subscribe(
      data => this.listDisciplinas = data
    );
  }
}
