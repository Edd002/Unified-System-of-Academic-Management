import { Usuario } from './usuario.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    getUsuarioByRA(ra: string): Observable<Usuario> {
        return this.http.get<Usuario>(`${FACELIST_API}/usuarios?ra_usuario=${ra}`);
    }

    getUsuarioById(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${FACELIST_API}/usuarios?id=${id}`);
    }
}