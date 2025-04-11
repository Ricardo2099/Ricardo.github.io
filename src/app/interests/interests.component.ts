// mycv/src/app/interests/interests.component.ts
import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interests } from '../models/interests/interests.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  // Se espera que la colección tenga varios registros de intereses
  interests: Interests[] = [];

  constructor(public interestsService: InterestsService) {}

  ngOnInit(): void {
    // Suscribirse al observable para obtener los datos de interests
    this.interestsService.getInterestsData().subscribe(data => {
      this.interests = data;
    });
  }
}
