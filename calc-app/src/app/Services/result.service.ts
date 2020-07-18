import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private firestore: AngularFirestore) { }

  //[POST] send calculation, total, and timestamp to firebase DB
  createResult(result, total){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection('results')
          .add({result:result, timestamp: new Date(), total:total})
          .then(res => {}, err => reject(err));
  });
  }

  //[GET] get collection from Firebase DB ordered by timestamp.
  getResults() {
    return this.firestore.collection('results', ref => ref.orderBy('timestamp')).valueChanges();
  }
}


