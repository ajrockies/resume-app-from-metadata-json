import { Component, OnInit, Input , ChangeDetectionStrategy} from '@angular/core';
import { MainInfo } from '../../model/mainInfo';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Input() mainInfo: MainInfo;
    constructor() {
    console.log(this.mainInfo);
  }

  ngOnInit() {
    console.log(this.mainInfo);
  }

}
