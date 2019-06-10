import { Component, OnInit, Input } from '@angular/core';
import { Experince } from 'src/app/model/experince';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experince[];

  constructor(private sanitizer: DomSanitizer) {
  }

  sanitize(url: string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit() {
  }

}
