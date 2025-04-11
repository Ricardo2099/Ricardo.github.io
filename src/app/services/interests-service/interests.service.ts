// mycv/src/app/services/interests-service/interests.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Interests } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  private interestsCollection: AngularFirestoreCollection<Interests>;
  interests$: Observable<Interests[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "interests" en Firestore
    this.interestsCollection = this.afs.collection<Interests>('interests');
    this.interests$ = this.interestsCollection.valueChanges();
  }

  // Método para obtener los datos de Interests
  getInterestsData(): Observable<Interests[]> {
    return this.interests$;
  }
}
