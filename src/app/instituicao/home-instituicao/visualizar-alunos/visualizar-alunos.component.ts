import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../aluno/aluno.model';
import { AlunoService } from '../../../aluno/aluno.service';

@Component({
  selector: 'usam-visualizar-alunos',
  templateUrl: './visualizar-alunos.component.html',
  styleUrls: ['./visualizar-alunos.component.css']
})
export class VisualizarAlunosComponent implements OnInit {

  idAluno: number;

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


  deleteAluno(){

    console.log(this.idAluno);
    this.alunoService.deleteAluno(this.idAluno).subscribe(
      data =>{
        console.log(data);
      },
      err =>{
        console.log('Erro Gerado: '+JSON.stringify(err));
        alert("Erro Ao EXCLUIR ,  Veja o Console para detalhes !");
      },
      ()=> {
        //alert('SUCESSO');
        this.loadAlunos();
      }
    );

  }

  private id(id: number) {this.idAluno = id; }
}
