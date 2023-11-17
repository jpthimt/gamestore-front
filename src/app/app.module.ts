import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogosListComponent } from './jogos-list/jogos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JogoService } from './jogo.service';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { JogoFormComponent } from './jogo-form/jogo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JogosListComponent,
    ClientesListComponent,
    ClienteFormComponent,
    JogoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [JogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
