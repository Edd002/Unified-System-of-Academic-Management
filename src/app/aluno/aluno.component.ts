import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'usam-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  listAlunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAllAlunos().subscribe(
      list => this.listAlunos = list
    );
  }

}
