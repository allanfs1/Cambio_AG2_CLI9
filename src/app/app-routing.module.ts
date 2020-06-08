import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotacaoComponent } from './cambio/cotacao-vt';
import {RotasTarefas} from './cambio/router.module';
const routes: Routes = [
  

  {
   path: '', 
   redirectTo: 'cambio/home', 
   pathMatch: 'full' 
 },

  ...RotasTarefas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
