import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http'
import { FACELIST_API } from 'src/app/app.api';
import { User } from './user.model';

@Injectable()
export class AuthenticatorService {
    
    currentUser: User;
    
    constructor(private httpClient: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('user'));

        if (this.currentUser == null) {
            this.startUser();
        }
    }

    private startUser() {
        this.currentUser = {
            codigo: null,
            ra: null,
            nome: "Usuário Convidado",
            email: "",
            usuario: "",
            senha: ""
        }
    }

    getCurrentUser(): User {
        this.currentUser.senha = "";

        return this.currentUser;
    }

    private registerPOST(user: User): Observable<User> {
        return null;
        //return this.httpClient.post<User>(`${FACELIST_API}/users`)
    }
}
