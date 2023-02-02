
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto : 'rtx',
    precio : 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  customDirective(){

    return this.miFormulario?.controls['existencia']?.errors;
  }

  // guardar( miFormulario: NgForm){

  precioValido():boolean{

    return this.miFormulario?.controls['precio']?.value < 0 &&
    this.miFormulario?.controls['precio']?.touched
  }

  nombreValido():boolean {

    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }


  guardar(){
    // guardar(miformulario: any){
      // console.log(miformulario);
    // console.log(miFormulario);

    // console.log(this.miFormulario);
     this.miFormulario.resetForm({
       'producto':'Algo',
       'precio':0,
       'existencia': 0
     });
    console.log( 'Posteado correcto' );


  }
}
