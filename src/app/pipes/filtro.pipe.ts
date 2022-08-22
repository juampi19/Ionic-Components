import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = '', columna: string = 'title'): any[] {

    //Cuando el texto esta vacio retornamos todo el arreglo
    if( texto === '' ) {
      return arreglo;
    }

    //Si el arreglo esta vacio retornamos el arreglo
    if( !arreglo ) {
      return arreglo;
    }

    //Aplicamos el filtro si pasa los if
    texto = texto.toLowerCase();


    return arreglo.filter(
      item => item[columna].toLowerCase().includes( texto )
     );
  }

}
