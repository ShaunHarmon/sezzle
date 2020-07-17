import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private firestore: AngularFirestore) { }

  //tslint:disable-next-line: typedef
  createResult(result){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection('results')
          .add({result:result})
          .then(res => {}, err => reject(err));
  });
  }

  // tslint:disable-next-line: typedef
  getResults() {
    return this.firestore.collection('results').snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    );
  }
}
