// mycv/src/app/services/certificates-service/certificates.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private certificatesCollection: AngularFirestoreCollection<Certificates>;
  certificates$: Observable<Certificates[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "certificates" en Firestore
    this.certificatesCollection = this.afs.collection<Certificates>('certificates');
    this.certificates$ = this.certificatesCollection.valueChanges();
  }

  // Método para obtener los datos de certificates
  getCertificatesData(): Observable<Certificates[]> {
    return this.certificates$;
  }
}
