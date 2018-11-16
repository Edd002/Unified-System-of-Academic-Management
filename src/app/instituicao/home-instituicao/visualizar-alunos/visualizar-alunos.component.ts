import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../aluno/aluno.model';
import { AlunoService } from '../../../aluno/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-visualizar-alunos',
  templateUrl: './visualizar-alunos.component.html',
  styleUrls: ['./visualizar-alunos.component.css']
})

export class VisualizarAlunosComponent implements OnInit {

  
  listAlunos: Aluno[];
  query: string;

  idAluno: number;
  AlunoAlterar: Aluno;

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit() {
    this.loadAlunos();
  }

  ngOnDestroy() {
    this.alunoService.aluno = this.AlunoAlterar;
  }
  
  setIdAlunoDeletar(idAluno: number) {
    this.idAluno = idAluno;
  }

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


  alterarAluno(idAluno: number) {
    for (const AlunoaBuscado of this.listAlunos) {
      if (AlunoaBuscado.id == idAluno) {
        this.AlunoAlterar = AlunoaBuscado;
        break;
      }
    }
    console.log(this.AlunoAlterar);
    
    this.router.navigate(['/instituicao/alterar-aluno']);
  }
}
