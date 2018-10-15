import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../aluno/aluno.model';
import { AlunoService } from '../../aluno/aluno.service';

@Component({
  selector: 'usam-home-instituicao',
  templateUrl: './home-instituicao.component.html',
  styleUrls: ['./home-instituicao.component.css']
})
export class HomeInstituicaoComponent implements OnInit {

  listAlunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAllAlunos().subscribe(
      alunos => this.listAlunos = alunos
    );

    //alert(this.listAlunos);
  }

}
