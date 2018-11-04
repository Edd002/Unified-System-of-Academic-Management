import { Disciplina } from './disciplina.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService {

    constructor(private http: HttpClient) { }

    getAllDisciplinas(): Observable<Disciplina[]> {
        return this.http.get<Disciplina[]>(`${FACELIST_API}/disciplinas`);
    }

    getAllDisciplinasBySearch(query: string): Observable<Disciplina[]> {
        return this.http.get<Disciplina[]>(`${FACELIST_API}/disciplinas?nome_like=${query}`);
    }

    getDisciplinaByCodigo(codigo: number): Observable<Disciplina> {
        return this.http.get<Disciplina>(`${FACELIST_API}/disciplinas/${codigo}`);
    }

    registraDisciplina(disciplina: Disciplina): Observable<Disciplina> {
        return this.http.post<Disciplina>(`${FACELIST_API}/disciplinas`, disciplina);
    }
}