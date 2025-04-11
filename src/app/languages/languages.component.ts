// mycv/src/app/languages/languages.component.ts
import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Languages } from '../models/languages/languages.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Languages[] = [];

  constructor(public languagesService: LanguagesService) { }

  ngOnInit(): void {
    // Se suscribe al observable para obtener los datos de languages
    this.languagesService.getLanguagesData().subscribe(data => {
      this.languages = data;
    });
  }
}

