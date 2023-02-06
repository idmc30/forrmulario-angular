import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

// formBuilder -> es ayudar a nosotros a crear formulario complejos
  //  miFormulario : FormGroup = new FormGroup({
  //   nombre      : new FormControl('Rtx 4080 ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(0)
  //  });

  miFormulario : FormGroup = this.fb.group({
    // validaciones, validaciones asincronas
    nombre : ['RTX 4080ti'],
    precio : 0,
    existencias : 0,
  })


  constructor(private fb:FormBuilder) { }



}
