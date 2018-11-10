import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../../../disciplina/disciplina.model';
import { DisciplinaService } from '../../../disciplina/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usam-visualizar-disciplinas',
  templateUrl: './visualizar-disciplinas.component.html',
  styleUrls: ['./visualizar-disciplinas.component.css']
})
export class VisualizarDisciplinasComponent implements OnInit {

  listDisciplinas: Disciplina[];
  query: string;
  idDisciplina: number;

  constructor(private disciplinaService: DisciplinaService, private router: Router) { }

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

 
  deleteDisciplina(){
    //console.log(this.idDisciplina);
    this.disciplinaService.deleteDisciplina(this.idDisciplina).subscribe(
      data =>{
        console.log(data);
      },
      err =>{
        console.log('Erro Gerado: '+JSON.stringify(err));
        alert("Erro Ao EXCLUIR ,  Veja o Console para detalhes !");
      },
      ()=> {
        //alert('SUCESSO');
        this.loadDisciplinas();
      }
    );

  }

  private alterarDisciplina(id: number) {
    let disciplina: Disciplina;
    
    for (const disciplinaBuscada of this.listDisciplinas) {
      if (disciplinaBuscada.id == id) {
        disciplina = disciplinaBuscada;
        break;
      }
    }
    
    console.log(disciplina);
    
    this.router.navigate(['/instituicao/alterar-disciplina',disciplina]);
  }
  
  private id(id: number) {this.idDisciplina = id; }
  
}
