import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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

  //  creo un nuevo control en el input
   nuevoFavorito : FormControl = this.fb.control('', Validators.required)

  //  creo una propiedad 
   get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
   }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo : string){
    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched; 
  }

  agregarFavorito(){

    if(this.nuevoFavorito.invalid){
      return 
    }
  // debemos agregar al fromgroup un nuevo control 
    // this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required))
 // utilizando el formbuildes
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();
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
