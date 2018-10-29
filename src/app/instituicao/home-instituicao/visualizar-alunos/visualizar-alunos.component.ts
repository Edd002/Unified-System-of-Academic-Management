import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../aluno/aluno.model';
import { AlunoService } from '../../../aluno/aluno.service';

@Component({
  selector: 'usam-visualizar-alunos',
  templateUrl: './visualizar-alunos.component.html',
  styleUrls: ['./visualizar-alunos.component.css']
})
export class VisualizarAlunosComponent implements OnInit {

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.loadAlunos();
  }

  listAlunos: Aluno[];
  query: string;

  loadAlunos() {
    this.alunoService.getAllAlunos().subscribe(
      data => this.listAlunos = data
    );
  }

  searchAlunos() {
    this.alunoService.getAllAlunosBySearch(this.query).subscribe(
      data => this.listAlunos = data
    );
  }
}
