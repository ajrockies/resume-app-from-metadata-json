import { Component, OnInit, Input , ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {
  @Input() summary: string;
  constructor() { }

  ngOnInit() {
  }

}
