import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CotacaoComponent } from './cotacao-vt';
import { CambioCtService} from './service';
import {RegexDirective} from './regex';
import { LayerNoticiaOneComponent } from './layer-noticia-one';
import { LayerNoticiaTwoComponent } from './layer-noticia-two';
import { LayerNoticiathreeComponent } from './layer-noticiathree';


@NgModule({
  declarations: [
    CotacaoComponent,
    RegexDirective,
    LayerNoticiaOneComponent,
    LayerNoticiaTwoComponent,
    LayerNoticiathreeComponent 

  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
    
  ],

  providers:[
    CambioCtService
  ],

  exports:[
    CotacaoComponent,
    LayerNoticiaTwoComponent,
    LayerNoticiathreeComponent 
  ]


})

export class CambioModule { }
