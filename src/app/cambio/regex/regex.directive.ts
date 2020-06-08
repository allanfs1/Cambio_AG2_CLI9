
import { Directive,HostListener, ElementRef} from '@angular/core';


@Directive({
  selector: '[regex]',
})

export class RegexDirective  {
  public  posicao; 
  private  trava:boolean =  true;
  constructor(private el:ElementRef) { }
 
/**
   * Implementa evento de keyup para o elemnto da diretiva.
   * 
   * @param any $event
*/
  @HostListener('keyup',['$event'])
  onkeyup($event:any){ 
  
  let valor =  $event.target.value;
  this.posicao = valor.indexOf(".");

  valor =  valor.replace(/[a-z-A-Z]/g,' ');


  if(this.posicao > 0 && this.trava == true){
     valor = valor.substr(0,this.posicao ) + valor.substr(this.posicao) ;
     alert("True");
  }

   if(this.posicao > 0 && this.trava == false){
    valor = this.pontiNull(this.posicao,valor);
    alert("false");
  }

  $event.target.value = valor;
  }


public pontiNull(pos:number,valor:any){
  switch(pos){
    case 1:
      valor = valor.substr(0, pos ) + '.' + "0";
      break;

   case 2: case 3: case 4: case 5: case 6:   
      valor = valor.substr(0, pos ) + '.' + "00";
      break;


    case 7:  case 8:  case 9:  case 10:
      valor = valor.substr(0, pos) + '.' + "0000";
      break;

     default :
       valor = valor.substr(0, pos) + '.' + "0000.0000";  
  }

     return valor;
}


}
