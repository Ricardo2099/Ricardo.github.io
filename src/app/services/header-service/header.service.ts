import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  accesoHeader: string = 'Valor inicial desde HeaderService';

  constructor() {
    console.log('HeaderService constructor');
  }
}
