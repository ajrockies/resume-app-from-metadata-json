import { Component, OnInit, Input } from '@angular/core';
import { ExtraActivity } from 'src/app/model/extraActivity';

@Component({
  selector: 'app-extra-activities',
  templateUrl: './extra-activities.component.html',
  styleUrls: ['./extra-activities.component.css']
})
export class ExtraActivitiesComponent implements OnInit {
  @Input() extraActivity: ExtraActivity[];

  constructor() { }

  ngOnInit() {
  }

}
