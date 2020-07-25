import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(private _calculator: CalculatorService) { }

  maxHour(c: AbstractControl): {[key: string]: boolean } | null {
    return  c.value === "23:59" ? {'maxLimit': true} : null;
  } 

  minHour(c: AbstractControl): {[key: string]: boolean } | null {
    return c.value === "00:00" ? {'minLimit': true} : null;
  }
  
  exitValidator(entry: number): ValidatorFn {

    return(c: AbstractControl): {[key: string]: boolean} | null => {      
      return  entry >= this._calculator.convertInputValues(c.value) ? 
        {'exitValidator': true} : null;
    }
  }

}
