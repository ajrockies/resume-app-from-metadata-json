import { Component, OnInit } from '@angular/core';
import { MetadataService } from './metadata.service';
import { ResumeModel } from '../model/resume-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [MetadataService]
})
export class ResumeComponent implements OnInit {

  resumeMetadata$: Observable<ResumeModel>;
  constructor(private metadataService: MetadataService) {
    this.resumeMetadata$ = this.metadataService.getmetadata();
  }

  ngOnInit() {
  }

}
