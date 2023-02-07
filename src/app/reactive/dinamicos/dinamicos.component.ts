import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

   miFormulario : FormGroup = this.fb.group({
    nombre : [,[Validators.required, Validators.minLength(3)]],
    
   });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo : string){
    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched; 
  }


  guardar(){

  
    if ( this.miFormulario.invalid) {
      // todos mis campos fueron tocados
      this.miFormulario.markAllAsTouched();
      return;
      
    }

    console.log(this.miFormulario.value);
   

  }
  

}
