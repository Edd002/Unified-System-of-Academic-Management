import { Instituicao } from './instituicao.model';
import { FACELIST_API } from '../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InstituicaoService {

    constructor(private http: HttpClient) { }

}