import { Component } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    constructor(public headerService: HeaderService){
        console.log(this.headerService);
    }
}
