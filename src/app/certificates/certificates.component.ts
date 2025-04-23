// mycv/src/app/certificates/certificates.component.ts
import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';
import { Certificates } from '../models/certificates/certificates.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  // Se espera que la colección tenga varios certificados
  certificates: Certificates[] = [];

  constructor(public certificatesService: CertificatesService) { }

  ngOnInit(): void {
    // Suscribirse al observable para obtener los certificados
    this.certificatesService.getCertificatesData().subscribe(data => {
      this.certificates = data;
    });
  }
}
