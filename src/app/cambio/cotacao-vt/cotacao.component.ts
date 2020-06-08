import { NgForm } from '@angular/forms';
import { Component, OnInit,ViewChild} from '@angular/core';

import {CambioCtService} from '../service';
import {ModelFixer,Response_fixer,ModelCalcular,Opcao}  from '../Model';
import { Observable } from 'rxjs/internal/Observable';
//import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})


export class CotacaoComponent implements OnInit {
  
  public Modelfixer:ModelFixer;
  public response:Response_fixer;
  public responseListar:Response_fixer;/* (Response da API) Para conversor de Moedas */
  public modelcalcular:ModelCalcular;/* Para Listar as Moedas */
  public dadosLista;
  public list_moeda:any[];
  /*Historico */
  private hist:boolean  = true;
  public  historico:string[] = []; 
  public i=0;
  constructor(private resposecambio:CambioCtService) { }
  
  ngOnInit(): void { 
    this.response =  new Response_fixer();
    this.responseListar = new Response_fixer();
    this.Modelfixer = new ModelFixer("EUR","BRL");/* Iniciando istancia */ 
    this.mdcalk();/*init valor calcular*/
    this.registrarService();
    this.RegistraListarCotacao();
    this.list_moeda =  this.resposecambio.listarbox();
    this.initJquery();

  }

/**
 * @Param registrando serviço
 * @return (response)
 */

  public registrarService(){
    this.resposecambio.getcotacaoDebase(this.Modelfixer)
      .subscribe(responseSt => this.response = responseSt),
      error => {
        switch(error.status){
           case 404:
             console.log("Dados não encontrados");
           break;
        }
      }
}

/*response valor unitario*/
public getResponse_unitario():number{
  return this.resposecambio.cotacao_bruta(this.response,this.Modelfixer);
}



/*response valor total */
public getResponse_valor(valor:number):number{
  return valor * this.resposecambio.cotacao_bruta(this.response,this.Modelfixer);
}


/* metodos set 
listar conteudo (cotação da moeda)*/
public listar_valores(valor:number,n:number,resp:Response_fixer){
  return this.resposecambio.setAfim(valor,n,resp,this.Modelfixer);
}


/*response data */
public getResponse_data():string{
  return this.resposecambio.date_cotacao(this.response);
}

/**
 * Converte calculo
 * 
 */
public converte_cotcao(){
  this.historico_fc();
  let valor = this.getResponse_valor(parseFloat(this.Modelfixer.valor)).toFixed(2);

  if(parseFloat(valor) != 0 || valor != null){
    return valor;
  }
   return 0;
}

/**
 * Historico
 * 
 */
public historico_fc(){ 
   this.i++;
  if(this.hist == true && this.historico.length < 20 ){
    this.historico[this.i] = this.modelcalcular.calk; 
   
   }
     
   if(this.i === 19){
    this.historico = [];
    this.i = 0;

  }

 

}

/*-------------------------------------------------------------------------------------------------------------------*/


/* metodos  valor unitario */
 get valor_unitario(){
  return this.getResponse_unitario();
} 



/* metodos get data da cotação da moeda*/
get data(){
  return this.getResponse_data();
} 

/* metodos get todos os valores 10 Real a 100 Real na moeda respctiva*/
get listarCotacoes(){
  return this.listar_valores(0,10,this.response);
}



public valoreTable(array:Array<string>,txt:string):Array<string>{
  array = [];
  let cd = txt.split(",");
  return cd;
}


public mdcalk(){
  let pos;
  if(this.modelcalcular == undefined){
     this.modelcalcular = new ModelCalcular();/*Model para guarda o calculo */
     this.modelcalcular.calk = "0";
     pos = this.modelcalcular.calk.indexOf("0");
     this.modelcalcular.calk = this.modelcalcular.calk.substr(pos) + "."+"0";
  }



}

/**
 * @param null
 * return return retorna um response cambio 
 */
public RegistraListarCotacao(){
   this. resposecambio.getcotacaoListar().subscribe(response=> this.responseListar = response,
   error => {
     switch(error.status){
        case 404:
          console.log("Dados não encontrados");
        break;
     }
   }

   );
}

/*  Response Rates da Lista */
/**
 * @param null
 * return  um response rates (Um objeto chave valor) 
 */
public ltRates(){
  return this.resposecambio.ltRates(this.responseListar);
}
/**
 * @param null
 * return  um response Data (Um objeto no formato string /-/-/) 
 */

public ltDate(){
  return this.resposecambio.ltData(this.responseListar);
}
/**
 * @param null
 * return um tempo em  timestap em  formato UNIX 
 */

public ltTimeStap(){
  return this.resposecambio.ltTimestap(this.responseListar);
}
  
 /* Jquery */
public initJquery(){
  $(window).on('load',function(){
    $('.check-box-jequery ').mouseover(function(){
     $(this).css('color','yellow');
   
    })

    $('.check-box-jequery').mouseout(function(){
      $(this).css('color','#FFF'); 
   
    });

                       /*Letra BRL */
     $('.check-bx-ctr-jqry ').mouseover(function(){
      $(this).css('color','#F83');
    
     })

     $('.check-bx-ctr-jqry').mouseout(function(){
       $(this).css('color','#555'); 
    
     });

                     /*Nav bar*/

     $('.logo-rh-jqy').mouseover(function(){
        $(this).css('color','#F83');
    
     })

     $('.logo-rh-jqy').mouseout(function(){
         $(this).css('color','#FFF');
    
     });

     $('#calcular').css({'color':'#FFF','background-color':'#F92','border-bottom':'3px solid #59F'});
   



  })

}


}
