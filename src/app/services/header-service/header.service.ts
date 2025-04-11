import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerCollection: AngularFirestoreCollection<Header>;
  header$: Observable<Header[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "header" en Firestore
    this.headerCollection = this.afs.collection<Header>('header');
    this.header$ = this.headerCollection.valueChanges();
  }

  // Método para obtener los datos del header
  getHeaderData(): Observable<Header[]> {
    return this.header$;
  }
}
