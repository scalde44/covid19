import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items:any[];
  comunas:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  casosComunas:any[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  constructor(private dbData: DataDbService) { 
    this.dbData.getItems()
      .subscribe(
        (data:any)=>{
          this.items=data;
          for (let index = 0; index < this.items.length; index++) {
              let com=(this.items[index].comuna);
              this.casosComunas[com-1]=this.casosComunas[com-1]+1;
          }
        }
      );
      
  }

  ngOnInit(): void {
  }
}
