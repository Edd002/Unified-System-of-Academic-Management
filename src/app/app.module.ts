import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AlunoComponent } from './aluno/aluno.component';
import { HeaderAlunoComponent } from './aluno/header-aluno/header-aluno.component';
import { HomeAlunoComponent } from './aluno/home-aluno/home-aluno.component';
import { MenuAlunoComponent } from './aluno/menu-aluno/menu-aluno.component';

import { InstituicaoComponent } from './instituicao/instituicao.component';
import { HeaderInstituicaoComponent } from './instituicao/header-instituicao/header-instituicao.component';
import { HomeInstituicaoComponent } from './instituicao/home-instituicao/home-instituicao.component';
import { MenuInstituicaoComponent } from './instituicao/menu-instituicao/menu-instituicao.component';

import { ProfessorComponent } from './professor/professor.component';
import { HeaderProfessorComponent } from './professor/header-professor/header-professor.component';
import { HomeProfessorComponent } from './professor/home-professor/home-professor.component';
import { MenuProfessorComponent } from './professor/menu-professor/menu-professor.component';

import { AlunoService } from './aluno/aluno.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,

    AlunoComponent,
    HeaderAlunoComponent,
    HomeAlunoComponent,
    MenuAlunoComponent,

    InstituicaoComponent,
    HeaderInstituicaoComponent,
    HomeInstituicaoComponent,
    MenuInstituicaoComponent,

    ProfessorComponent,
    HeaderProfessorComponent,
    HomeProfessorComponent,
    MenuProfessorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
