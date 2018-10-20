import { Professor } from './professor.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfessorService {

    constructor(private http: HttpClient) { }

    getAllProfessores(): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${FACELIST_API}/professores`);
    }

    getAllProfessoresBySearch(query: string): Observable<Professor[]> {
        return this.http.get<Professor[]>(`${FACELIST_API}/professores?nome_like=${query}`);
    }

    getProfessoresById(id: number): Observable<Professor> {
        return this.http.get<Professor>(`${FACELIST_API}/professores/${id}`);
    }
}