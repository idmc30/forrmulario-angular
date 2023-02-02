
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

  constructor() { }

  ngOnInit(): void {
  }

  // guardar( miFormulario: NgForm){


  nombreValido():boolean {

    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }


  guardar(){
    // guardar(miformulario: any){
      // console.log(miformulario);
    // console.log(miFormulario);

    console.log(this.miFormulario);

  }
}
