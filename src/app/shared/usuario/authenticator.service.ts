import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { FACELIST_API } from 'src/app/app.api';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthenticatorService {

    currentUser: Usuario;

    constructor(private httpClient: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('u'));
        if (this.currentUser == null)
            this.startUser();
    }

    public get getCurrentUser(): Usuario {
        this.currentUser.senha = null;
        return this.currentUser;
    }

    private startUser() {
        this.currentUser = {
            id: null,
            ra: null,
            nome: "Usuário Convidado",
            email: null,
            usuario: null,
            senha: null
        }
    }

    private registerPOST(usuario: Usuario): Observable<Usuario> {
        return this.httpClient.post<Usuario>(`${FACELIST_API}/usuarios`, usuario);
    }

    register(usuario: Usuario) {
        this.registerPOST(usuario).subscribe(
            data => {
                this.currentUser = data;
                this.currentUser.senha = null;
                sessionStorage.setItem('u', JSON.stringify(this.currentUser));

                alert('Usuário registrado.');
            }
        );
    }

    isLogged(): boolean {
        if (this.currentUser.id == null)
            return false;
        else
            return true;
    }

    logout() {
        sessionStorage.removeItem('u');
        this.startUser();
    }
}
