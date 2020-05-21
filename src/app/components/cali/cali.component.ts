import { Component, OnInit } from '@angular/core';
import { CaliService } from 'src/app/services/cali.service';

@Component({
  selector: 'app-cali',
  templateUrl: './cali.component.html',
  styleUrls: ['./cali.component.css']
})
export class CaliComponent {
  totalCasos:number;
  totalMuertes:number;
  totalRecuperados:number;
  cargando: boolean = true;
  constructor(private _cali: CaliService) {
    
      this._cali.getTotal()
      .subscribe(
        (data:any)=>{
          this.totalCasos=(data[0].count_id_de_caso);
        }
      );
      this._cali.getRecuperados()
      .subscribe(
        (data:any)=>{
          this.totalRecuperados=(data[0].count_id_de_caso);
        }
      );
      this._cali.getMuertes()
      .subscribe(
        (data:any)=>{
          this.totalMuertes=(data[0].count_id_de_caso);
        }
      );
    this.cargando = false;
  }
}
