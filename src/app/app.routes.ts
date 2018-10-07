import { Routes } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AlunoComponent } from './aluno/aluno.component';
import { InstituicaoComponent } from './instituicao/instituicao.component';
import { ProfessorComponent } from './professor/professor.component';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'aluno', component: AlunoComponent },
    { path: 'instituicao', component: InstituicaoComponent },
    { path: 'professor', component: ProfessorComponent },
]