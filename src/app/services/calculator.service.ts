import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  convertInputValues(v: string): number {
    return parseFloat(v.replace(':', '.'));
  }
  
}
