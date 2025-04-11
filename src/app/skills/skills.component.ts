// mycv/src/app/skills/skills.component.ts
import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skill } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // En este caso, se espera que haya múltiples habilidades
  skills: Skill[] = [];

  constructor(public skillsService: SkillsService) { }

  ngOnInit(): void {
    // Suscribirse al observable para obtener los datos de skills
    this.skillsService.getSkillsData().subscribe(data => {
      this.skills = data;
    });
  }
}
