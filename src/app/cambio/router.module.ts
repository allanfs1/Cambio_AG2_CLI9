import {Routes} from '@angular/router';
import { CotacaoComponent } from './cotacao-vt';
import { LayerNoticiaOneComponent } from './layer-noticia-one';


export const RotasTarefas:Routes = [

    {
        path: ' ', 
		    redirectTo:"cambio/home"
    },
    
     {
        path: 'cotacao', 
		    component: CotacaoComponent 
     },

     {
        path: 'cambio/home', 
           component: CotacaoComponent 
     },

     {
        path: 'cambio/economia', 
           component: LayerNoticiaOneComponent
     },
    
  
  
  



];



