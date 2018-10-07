import { Routes } from '@angular/router';

import { HomeAlunoComponent } from './aluno/home-aluno/home-aluno.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

export const ROUTES: Routes = [
    { path: 'home-aluno', component: HomeAlunoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]