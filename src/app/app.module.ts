import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { MetadataService } from './resume/metadata.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponentComponent } from './resume/main-component/main-component.component';
import { SummeryComponent } from './resume/summery/summery.component';
import { BasicSkillsComponent } from './resume/basic-skills/basic-skills.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { ExtraActivitiesComponent } from './resume/extra-activities/extra-activities.component';
import { ContactInfoComponent } from './resume/contact-info/contact-info.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    MainComponentComponent,
    SummeryComponent,
    BasicSkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ExtraActivitiesComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
