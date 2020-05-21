import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {
  @Input() sintomita:string;
  comunas:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  sexos:any[]=['M','F','Prefiero no decirlo','Personalizado']
  sinto:string[]=["Fiebre","Tos seca","Cansancio","Dificultad para respirar","Obstruccion nasal","Dolor de cabeza"];

  // valorSeleccionado = lista.options[lista.selectedIndex].value
    createFormGroup() {
      return new FormGroup(
        {
          nombre: new FormControl(''),
          apellido: new FormControl(''),
          cedula: new FormControl(''),
          edad: new FormControl(''),
          direccion: new FormControl(''),
          comuna: new FormControl(''),
          sexo: new FormControl(''),
          sintomas: new FormControl([''])
        }
      )
    }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    // this.refresh()
    this.contactForm = this.createFormGroup();
    
  }
  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }
  onSaveForm() { 
    console.log(this.contactForm);
    if(this.contactForm.valid){

      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Guardado'
      })
      
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }else{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: 'Falta informacion'
      })
    }
  }
  refresh(): void {
    window.location.reload();
}
}
