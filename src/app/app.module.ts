import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogosListComponent } from './jogos-list/jogos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JogoService } from './jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    JogosListComponent
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
