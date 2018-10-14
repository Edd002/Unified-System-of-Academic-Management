import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    onEnterKey();
  }

  cadastrar(registroAcademico: string, usuario: string, email: string, senha: string, confirmarSenha: string): void {
    alert("CADASTROU\nRegistro Acadêmico: " + registroAcademico + "\nUsuário: " + usuario + "\nE-mail: " + email + "\nSenha: " + senha + "\nConfirmar Senha: " + confirmarSenha);
  }
}


// -- Javascript- -
function onEnterKey() {
  var inputRegistroAcademico = document.getElementById("txt-registro-academico");
  var inputUsuario = document.getElementById("txt-usuario");
  var inputEmail = document.getElementById("txt-email");
  var inputSenha = document.getElementById("txt-senha");
  var inputConfirmarSenha = document.getElementById("txt-confirmar-senha");

  inputRegistroAcademico.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-cadastrar").click();
    }
  });

  inputUsuario.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-cadastrar").click();
    }
  });

  inputEmail.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-cadastrar").click();
    }
  });

  inputSenha.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-cadastrar").click();
    }
  });

  inputConfirmarSenha.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("btn-cadastrar").click();
    }
  });
}
