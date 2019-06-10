import { Component, OnInit, Input } from '@angular/core';
import { ContactInfo } from 'src/app/model/contactInfo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() contactInfo: ContactInfo[];
  constructor(private sanitizer: DomSanitizer) {
  }

  sanitize(url: string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit() {
  }

}
