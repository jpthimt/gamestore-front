import { Component } from '@angular/core';
import { Jogo } from '../jogo';
import { ActivatedRoute, Router } from '@angular/router';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-form',
  templateUrl: './jogo-form.component.html',
  styleUrls: ['./jogo-form.component.css'],
})
export class JogoFormComponent {
  jogo: Jogo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jogoService: JogoService
  ) {
    this.jogo = new Jogo();
  }

  onSubmit() {
    console.log(this.jogo);
    this.jogoService.save(this.jogo).subscribe((result) => this.gotoJogoList());
  }

  gotoJogoList() {
    this.router.navigate(['/jogos']);
  }
}
