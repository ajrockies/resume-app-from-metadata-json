import { Injectable } from '@angular/core';
import { ResumeModel } from '../model/resume-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private http: HttpClient) {

  }
  getmetadata(): Observable<ResumeModel> {
    return this.http.get<ResumeModel>('/assets/resumeTemplate.json');
// tslint:disable-next-line:no-debugger
debugger;
  }
}


