// mycv/src/app/education/education.component.ts
import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/education/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  // Se espera que la colección tenga varios registros de educación
  educationList: Education[] = [];

  constructor(public educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducationData().subscribe(data => {
      this.educationList = data;
    });
  }
}
