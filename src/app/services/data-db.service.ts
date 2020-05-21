import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../interface/message.interface';
@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private covidCollection: AngularFirestoreCollection<MessageI>;
  private items:Observable<any>;
  constructor(private afs:AngularFirestore) { 
    this.covidCollection=afs.collection<MessageI>('covid');
    this.items=afs.collection('covid').valueChanges();
  }
  saveMessage(newCovid:any):void{
    this.covidCollection.add(newCovid);
  }
  getItems(){
    return this.items;
  }
}
