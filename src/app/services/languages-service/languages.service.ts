// mycv/src/app/services/languages-service/languages.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Languages } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private languagesCollection: AngularFirestoreCollection<Languages>;
  languages$: Observable<Languages[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "languages" en Firestore
    this.languagesCollection = this.afs.collection<Languages>('languages');
    this.languages$ = this.languagesCollection.valueChanges();
  }

  // Método para obtener los datos de languages
  getLanguagesData(): Observable<Languages[]> {
    return this.languages$;
  }
}

