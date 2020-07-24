import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  spliceDate(date: Date): Number[] {
    return [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear()
    ];
  }

  configDate(date: Date, year?: boolean) {           
    return year? this.spliceDate(date).join('/') : this.spliceDate(date).slice(0, 2).join('/');
  }
}
