// mycv/src/app/services/education-service/education.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationCollection: AngularFirestoreCollection<Education>;
  education$: Observable<Education[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "education" en Firestore
    this.educationCollection = this.afs.collection<Education>('education');
    this.education$ = this.educationCollection.valueChanges();
  }

  // Método para obtener los datos de Education
  getEducationData(): Observable<Education[]> {
    return this.education$;
  }
}
