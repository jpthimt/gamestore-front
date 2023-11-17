import { Component, OnInit } from '@angular/core';
import { Jogo } from '../jogo';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogos-list',
  templateUrl: './jogos-list.component.html',
  styleUrls: ['./jogos-list.component.css']
})
export class JogosListComponent implements OnInit{

  jogos: Jogo[] = [];


  constructor(private jogoService: JogoService){}

  ngOnInit(){
      this.jogoService.findAll().subscribe(data => {
        this.jogos = data;
      })
  }
}
