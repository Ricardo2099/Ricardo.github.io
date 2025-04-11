import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { WorkExperience } from '../../models/work-experience/work-experience.model';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: AngularFirestore) {}

  getWorkExperiences(): Observable<WorkExperience[]> {
    return this.firestore.collection<WorkExperience>('work-experience').valueChanges({ idField: 'id' });
  }
}
