import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'usam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    onEnterKey();
  }

  profileForm = this.formBuilder.group({
    usuario: [''],
    senha: ['']
  });

  rotaLogin: string;
  loginErro: boolean;

  logar(usuario: string, senha: string): void {
    if (usuario == "aluno" && senha == "aluno") {
      this.rotaLogin = "/aluno";
      this.loginErro = false;
    } else if (usuario == "instituicao" && senha == "instituicao") {
      this.rotaLogin = "/instituicao";
      this.loginErro = false;
    } else if (usuario == "professor" && senha == "professor") {
      this.rotaLogin = "/professor";
      this.loginErro = false;
    } else {
      this.rotaLogin = "/login";
      this.loginErro = true;
    }

    this.router.navigate([this.rotaLogin]);
  }
}


// -- Javascript- -
function onEnterKey() {
  var inputUsuario = document.getElementById("txt-usuario");
  var inputSenha = document.getElementById("txt-senha");

  inputUsuario.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-logar").click();
    }
  });

  inputSenha.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-logar").click();
    }
  });
}

