import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rotaLogin: string = "/register";
  validadorLogin: boolean;

  logar(usuario: string, senha: string): void {
    console.log("Usuário: " + usuario);
    console.log("Senha: " + senha);

    if (usuario == "aluno" && senha == "aluno") {
      console.log("Antes: " + this.rotaLogin);

      this.rotaLogin = "/aluno";
      this.validadorLogin = true;

      console.log("Depois: " + this.rotaLogin);

    } else if (usuario == "instituicao" && senha == "instituicao") {
      this.rotaLogin = "/instituicao";
      this.validadorLogin = true;
    } else if (usuario == "professor" && senha == "professor") {
      this.rotaLogin = "/professor";
      this.validadorLogin = true;
    } else {
      this.rotaLogin = "/login";
      this.validadorLogin = false;
    }
  }
}