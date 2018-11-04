import { Aluno } from './aluno.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

    constructor(private http: HttpClient) { }

    getAllAlunos(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${FACELIST_API}/alunos`);
    }

    getAllAlunosBySearch(query: string): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${FACELIST_API}/alunos?nome_like=${query}`);
    }

    getAlunoByRA(ra: string): Observable<Aluno> {
        return this.http.get<Aluno>(`${FACELIST_API}/alunos?ra=${ra}`);
    }

    getAlunoByCodigo(codigo: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${FACELIST_API}/alunos?codigo=${codigo}`);
    }

    registraAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(`${FACELIST_API}/alunos`, aluno);
    }

}