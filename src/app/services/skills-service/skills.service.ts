// mycv/src/app/services/skills-service/skills.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsCollection: AngularFirestoreCollection<Skill>;
  skills$: Observable<Skill[]>;

  constructor(private afs: AngularFirestore) {
    // Conecta con la colección "skills" en Firestore
    this.skillsCollection = this.afs.collection<Skill>('skills');
    this.skills$ = this.skillsCollection.valueChanges();
  }

  // Método para obtener los datos de skills
  getSkillsData(): Observable<Skill[]> {
    return this.skills$;
  }
}

