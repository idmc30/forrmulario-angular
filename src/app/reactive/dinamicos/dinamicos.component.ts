import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

   miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
    
   });

   get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
   }

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
