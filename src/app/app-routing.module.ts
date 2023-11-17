import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JogosListComponent } from './jogos-list/jogos-list.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  {path: 'jogos', component: JogosListComponent},
  {path: 'clientes', component: ClientesListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
