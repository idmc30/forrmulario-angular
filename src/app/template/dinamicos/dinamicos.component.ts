import { Component, OnInit } from '@angular/core';

interface Persona{

  nombre:string,
  favoritos: Favorito[]

}


interface Favorito{
  id:number,
  nombre: string
}




@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

     persona:Persona = {
        nombre : 'Irwin',
        favoritos: [
          { id: 1, nombre : 'Spiderman 2'},
          { id: 2, nombre : 'Call of Dufty'},
        ]
     };

    eliminar(index:number){
      console.log(index);

      this.persona.favoritos.splice(index, 1)

    }

   guardar(){
    console.log('fornmulario posteado');

   }

}
