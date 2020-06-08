import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ModelFixer,Response_fixer,Moeda,ListarAll}  from '../Model';
import { Observable } from 'rxjs/internal/Observable';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
 //https://br.tradingview.com/chart/?symbol=FX_IDC%3AUSDBRL

@Injectable({
  providedIn: 'root'
})
export class CambioCtService {
 
  private model:ModelFixer;//Model
  private responseFixer:Response_fixer;//response
  private  URL:string = "http://data.fixer.io/api/";//base URL data.fixer
  private readonly KEY:string = "bfac9da4383c940a4aac2ee40e884e64"; /*chave do usuario */
  private lt:Moeda[];
  private lista:object[] = [

  { "sigla": "AUD", "descricao": "Dólar australiano" },
	{ "sigla": "BGN", "descricao": "Lev búlgaro" },
	{ "sigla": "BRL", "descricao": "Real brasileiro" },
	{ "sigla": "CAD", "descricao": "Dólar canadense" },
	{ "sigla": "CHF", "descricao": "Franco suíço" },
	{ "sigla": "CNY", "descricao": "Yuan Chinês" },
	{ "sigla": "CZK", "descricao": "Coroa República Tcheca" },
	{ "sigla": "DKK", "descricao": "Coroa dinamarquesa" },
	{ "sigla": "EUR", "descricao": "Euro" },
	{ "sigla": "GBP", "descricao": "Libra Esterlina" },
	{ "sigla": "HKD", "descricao": "Dólar de Hong Kong" },
	{ "sigla": "HRK", "descricao": "Coroa Croácia" },
	{ "sigla": "HUF", "descricao": "Florim húngaro" },
	{ "sigla": "IDR", "descricao": "Rupia indonésia" },
	{ "sigla": "ILS", "descricao": "Novo shekel israelense" },
	{ "sigla": "INR", "descricao": "Rupia indiana" },
	{ "sigla": "JPY", "descricao": "Iene japonês" },
	{ "sigla": "KRW", "descricao": "Won sul-coreano" },
	{ "sigla": "MXN", "descricao": "Peso mexicano" },
	{ "sigla": "MYR", "descricao": "Malásia Ringgit" },
	{ "sigla": "NOK", "descricao": "Coroa Noruega" },
	{ "sigla": "NZD", "descricao": "Dólar da Nova Zelândia" },
	{ "sigla": "PHP", "descricao": "Peso filipino" },
	{ "sigla": "PLN", "descricao": "Złoty Polónia" },
	{ "sigla": "RON", "descricao": "Leu romeno" },
	{ "sigla": "RUB", "descricao": "Belarus Ruble" },
	{ "sigla": "SEK", "descricao": "Coroa Suécia" },
	{ "sigla": "SGD", "descricao": "Dólar de Singapura" },
	{ "sigla": "THB", "descricao": "Baht Tailândia" },
	{ "sigla": "TRY", "descricao": "Lira turca" },
	{ "sigla": "USD", "descricao": "Dólar dos Estados Unidos" }, 
  { "sigla": "ZAR", "descricao": "Rand África do Sul" }
  
  ];

  constructor(private http:HttpClient) { }

/**
 * /*http://data.fixer.io/api/2001-06-21?access_key=bfac9da4383c940a4aac2ee40e884e64&base=EUR&symbols=GBP,EUR,BRL
 * @param moedaDE 
 * get api http://data.fixer.io/api/<data>
 */
 public getURL_cotar_date(data:string,moedaDE:ModelFixer){
  
  try{
  /*query string*/ 
  let baseURI = this.URL+data+"?access_key=" + this.KEY +"&base="+`${moedaDE.usde}`+"&symbols="+`${moedaDE.uspara}`;
  return  baseURI ;
  
 }catch(e){
    throw "Erro ao obter a Requisição..."+e;
  }

 }


/**
 * Obter dados da cotação de todas as moedas
 * http://data.fixer.io/api/latest?access_key=bfac9da4383c940a4aac2ee40e884e64
 * @param moedaDE 
 * get api http://data.fixer.io/api/latest
 */
public gteURILista_all_cotar(moedaDE:ModelFixer){

  try{
  /*query string*/ 
  let baseURI = this.URL+"latest"+"?access_key=" + this.KEY;
  return  baseURI ;
  
 }catch(e){
    throw "Erro ao obter a Requisição..."+e;
  }

 }

/**
 * obter uma cotação de uma moeda especifica
 * @param moedaDE 
 * get api http://data.fixer.io/api/latest
 */
  public gteURI(moedaDE:ModelFixer){
   try{
   /*query string*/ 
   let baseURI = this.URL+"latest"+"?access_key=" + this.KEY +"&base="+`${moedaDE.usde}`+"&symbols="+`${moedaDE.uspara}`;
   return  baseURI ;
   
  }catch(e){
     throw "Erro ao obter a Requisição..."+e;
   }

  }

/*API Montada  para listar cotação Listar */
  public gteURIListar(){
    try{
    /*query string*/ 
    let baseURI = this.URL+"latest"+"?access_key=" + this.KEY;
    return  baseURI ;
    
   }catch(e){
      throw "Erro ao obter a Requisição..."+e;
    }
 
   }
                      /*Operações do Sistema */

/**
 *  @param moedaDE 
 * valor da converção total
 */
  public getcotacaoDebase(moedaDE:ModelFixer):Observable<any>{
       return  this.http.get(this.gteURI(moedaDE));
  }

/**
 *  @pram Null
 *  return retorno uma requisição get 
 */
/*APi Rest FULL montada para obter todos os dados da cotação para listar */
public getcotacaoListar():Observable<any>{
    return  this.http.get(this.gteURIListar());
}

/**
 * @param model:response_fixer
 * return um a data /-/-/-
 */
public ltData(model:Response_fixer){
    return model.date;
}
/**
 * @param model:response_fixer
 * return response rates (Um objeto Rates chave valor) 
 */

public ltRates(model:Response_fixer){
   return model.rates;
}
/**
 * @param model:response_fixer
 * return um tempo em  timestap em  formato UNIX  
 */
public ltTimestap(model:Response_fixer){
  return model.timestamp;
}


/**
 * valor da cotação
 *  @param moedaDE 
 * valor da converção total
 */

  public cotacao_moeda(response:Response_fixer,moedaDE:ModelFixer){

    if(response ===  undefined){
      console.log("requisição com valor nulo");
     }
 
       return (1 / response.rates[moedaDE.uspara]).toFixed(4);
   }
 



/**
 * Cotacao por valor unitario
 * Valor unitario da moeda
 *  @param moedaDE 
 *  @param response
 * 
 */
   public cotacao_bruta(response:Response_fixer,moedaDE:ModelFixer){
  
    if(response ===  undefined){
      console.log("requisição com valor nulo");
     }
      
       return  response.rates[moedaDE.uspara].toFixed(5);
   }
 

/**
 *  cotação por valor
 *  @param moedaDE 
 *  @param response data da cotação
 * 
 */
public date_cotacao (response:Response_fixer){

  if(response ===  undefined){
    console.log("requisição com valor nulo");
   }


  return  response.date;
}

/*  função para listar 20 dadso de cotação na respequitiva moedas*/

public setAfim(valor:number,n:number,responseCT:Response_fixer,model:ModelFixer){
  let cotar =  parseFloat(responseCT.rates['BRL']).toFixed(2);
  let vl:any[] = [ ];

   for(let i=1;i<=n;i++){  

    if(valor === 0){
      vl.push(cotar);
    }

     valor+=10;
     vl[i]= Math.floor((valor * parseFloat(cotar)));
   }

  
     return  vl;
}


/**
 * Serviço de listagem de dados
 */

 public listarbox():Moeda[] {

	if (this.lt) {
    return this.lt;
  } 
  
   this.lt = [];

   for(let obj of this.lista){
     let moeda = new Moeda();
     Object.assign(moeda,obj);
     this.lt.push(moeda);
    }
 
    return this.lt;
 }


public setAfimReal9(){

}



}
