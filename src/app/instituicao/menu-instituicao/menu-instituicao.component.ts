import { Component, OnInit, Input } from '@angular/core';
import { Instituicao } from 'src/app/instituicao/instituicao.model';

@Component({
  selector: 'usam-menu-instituicao',
  templateUrl: './menu-instituicao.component.html',
  styleUrls: ['./menu-instituicao.component.css']
})
export class MenuInstituicaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showProfessores() {
    //loadProfessores();
  }

  showAlunos() {
    //loadAlunos();
  }

  showDisciplinas() {
    //loadDisciplinas();
  }

}
