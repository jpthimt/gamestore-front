import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogo } from './jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogosUrl: string;
  

  constructor(private http: HttpClient) {
    this.jogosUrl = 'http://localhost:8080/jogos';
  }

  public findAll(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.jogosUrl);
  }

  public save(jogo: Jogo) {
    return this.http.post<Jogo>(this.jogosUrl, jogo);
  }
}
