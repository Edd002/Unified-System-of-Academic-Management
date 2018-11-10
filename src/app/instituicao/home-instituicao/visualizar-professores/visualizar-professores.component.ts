import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../professor/professor.model';
import { ProfessorService } from '../../../professor/professor.service';

@Component({
  selector: 'usam-visualizar-professores',
  templateUrl: './visualizar-professores.component.html',
  styleUrls: ['./visualizar-professores.component.css']
})
export class VisualizarProfessoresComponent implements OnInit {
  
  idProfessor: number;

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.loadProfessores();
  }

  listProfessores: Professor[];
  query: string;

  loadProfessores() {
    this.professorService.getAllProfessores().subscribe(
      data => this.listProfessores = data
    );
  }

  searchProfessores() {
    this.professorService.getAllProfessoresBySearch(this.query).subscribe(
      data => this.listProfessores = data
    );
  }

  deleteProfessor(){

    console.log(this.idProfessor);
    this.professorService.deleteProfessor(this.idProfessor).subscribe(
      data =>{
        console.log(data);
      },
      err =>{
        console.log('Erro Gerado: '+JSON.stringify(err));
        alert("Erro Ao EXCLUIR ,  Veja o Console para detalhes !");
      },
      ()=> {
        //alert('SUCESSO');
        this.loadProfessores();
      }
    );

  }

  private id(id: number) { this.idProfessor = id; }
}
