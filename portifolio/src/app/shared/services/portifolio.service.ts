import { Portifolio } from './../interfaces/portifolio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  private readonly API = "https://api.github.com/users/lgfvarella/repos"

  constructor(private http: HttpClient) { }

  listar(): Observable<Portifolio[]>{
    return this.http.get<Portifolio[]>(this.API)
  }
}
