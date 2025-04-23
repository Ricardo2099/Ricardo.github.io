import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
// Importa la interfaz o clase que defina tu estructura de datos si la tienes:
import { Header } from '../models/header/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Si tienes una interfaz o clase llamada "Header" puedes usar:
  header: Header | null = null;

  // Si no la tienes, puedes usar "any" temporalmente:
  // header: any = null;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    // Como se espera que la colección "header" tenga un solo documento, tomamos el primero.
    this.headerService.getHeaderData().subscribe(data => {
      // data seguramente es un array, revisa tu servicio para confirmarlo
      if (data && data.length > 0) {
        this.header = data[0];
      }
    });
  }
}
