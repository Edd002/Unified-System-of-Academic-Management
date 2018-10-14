import { Aluno } from './aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FACELIST_API } from '../app.api';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

    constructor(private http: HttpClient) { }

    getAllAlunos(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${FACELIST_API}/alunos`);
    }
}