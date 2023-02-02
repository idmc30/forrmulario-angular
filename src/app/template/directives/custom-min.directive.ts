import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

// CUSTOMMIN ES EL NOMBRE QUE LE COLOCO EN EL ELEMENTO
@Directive({
  selector: '[customMin][ngModel]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting:CustomMinDirective,
      multi:true
  }]
})
export class CustomMinDirective implements Validator{

  @Input() minimo!: number;

  constructor(){
    console.log('Directiva');
  }

  validate(control: FormControl) {

    const inputValue = control.value;

    // console.log(inputValue);

    return (inputValue < this.minimo) ? {'customMin': true} : null;

  }



}
