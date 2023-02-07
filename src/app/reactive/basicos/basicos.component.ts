import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

// formBuilder -> es ayudar a nosotros a crear formulario complejos
  //  miFormulario : FormGroup = new FormGroup({
  //   nombre      : new FormControl('Rtx 4080 ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(0)
  //  });

  miFormulario : FormGroup = this.fb.group({
    // valor,validaciones, validadores sincronos, validadores asincronas
    nombre : [,[Validators.required, Validators.minLength(3)]],
    precio : [, [Validators.required,Validators.min(0)]],
    existencias : [,[Validators.required,Validators.min(0)]],
  })


  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Rtx',
      precio : 1600,
      existencias:10
    })
  }

  campoEsValido(campo:string){
    // return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo]?.touched;

    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched
  }

  maximoTope(){
 
    const precio = this.miFormulario.get('precio')?.value;

    if (precio ==10) {
      return true
    }

    return false;
    
  }


  guardar(){


    if ( this.miFormulario.invalid) {
      // todos mis campos fueron tocados
      this.miFormulario.markAllAsTouched();
      return;
      
    }

    console.log(this.miFormulario.value);

    this.miFormulario.reset();
    
    
  }

}
