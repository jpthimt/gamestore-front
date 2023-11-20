import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JogosListComponent } from './jogos-list/jogos-list.component';
import { AppRoutingModule } from './app-routing.module';
import { JogoService } from './jogo.service';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { JogoFormComponent } from './jogo-form/jogo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JogosListComponent,
    JogoFormComponent,
    ClientesListComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
