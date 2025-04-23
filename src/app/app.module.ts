import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Módulos de Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';

// Servicios
import { HeaderService } from './services/header-service/header.service';
import { WorkExperienceService } from './services/work-experience-service/work-experience.service';
import { EducationService } from './services/education-service/education.service';
import { SkillsService } from './services/skills-service/skills.service';
import { CertificatesService } from './services/certificates-service/certificates.service';
import { LanguagesService } from './services/languages-service/languages.service';
import { InterestsService } from './services/interests-service/interests.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificatesComponent,
    LanguagesComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
    AngularFirestoreModule // Módulo de Firestore
  ],
  providers: [
    HeaderService,
    WorkExperienceService,
    EducationService,
    SkillsService,
    CertificatesService,
    LanguagesService,
    InterestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
