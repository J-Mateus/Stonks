import { DateService } from './../../services/date.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  saveDates: string[];
  value: Date;
  br: any;
  form: FormGroup;
  currentId: string;
  currentMonth: any;
  
  constructor(private fb: FormBuilder,
              private ds: DateService) { }

  ngOnInit() {

    this.saveDates = [];
    this.currentMonth =  new Date().getMonth() + 1;
    // document.querySelectorAll('.ui-datepicker-other-month').forEach(x => x.)

    this.br = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Clear',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Sem'
    };
  
    this.form = this.fb.group({
      'days': this.fb.array([])
    });

  }


  //Trigger when day is active
  markDate(e) {
    this.currentId = this.ds.configDate(e);
    this.addDay(e);
  }

  //init formGroup
  initDay() {  
    return this.fb.group({
      'entry': [],
      'exit': []
    });
  }

  //Add formGroup on form Array and set date on display
  addDay(date) {
    const control = (<FormArray>this.form.controls['days']) as FormArray;
    
    control.push(this.initDay());
    
    //Call function that setDay on display
    !control.length ? this.setAttribute(0, date) : this.setAttribute(control.length -1, date);
    
  }
  
  //Set date on display and an indentifier on form group
  setAttribute(index, date) {
    setTimeout(() => {
      document.getElementById(`${index}-day`).textContent = this.ds.configDate(date);
      document.getElementById(`${index}-fb`).setAttribute('data-form', this.ds.configDate(date));
    }, 0);
  }   
   
  //on click in date calendar
  clickDate(e) {
    let element: HTMLElement = e.target;
    
    if(element.localName === "a" && !element.classList.contains('ui-state-active') && element.id) {               
      
      this.removeDate(element.id);

    }else if (element.localName === "a" && !element.classList.contains('ui-state-active') && !element.id){
          
      this.removeDate(`${element.textContent}/${this.currentMonth}`);
    }

     if(element.localName === "a" && element.classList.contains('ui-state-active')) element.setAttribute('id', this.currentId);
  }

  //remove input of form
  removeDate(id:string) {
   
    const control = (<FormArray>this.form.controls['days']) as FormArray;   
    console.log(parseInt(this.findFormGroup(id)));
    
    control.removeAt(parseInt(this.findFormGroup(id)));
    
  }

  findFormGroup(id:string) {      
    return <string>document.querySelector(`div[data-form='${id}']`).id.match(/\d+/)[0];
  }

  dates(e) {
    this.currentMonth = e.month;
  }
}
