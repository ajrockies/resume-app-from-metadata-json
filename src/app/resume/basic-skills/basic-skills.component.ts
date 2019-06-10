import { Component, OnInit , Input } from '@angular/core';
import { BasicSkills } from 'src/app/model/basicSkills';

@Component({
  selector: 'app-basic-skills',
  templateUrl: './basic-skills.component.html',
  styleUrls: ['./basic-skills.component.scss']
})
export class BasicSkillsComponent implements OnInit {
  @Input() basicSkills: BasicSkills;

  constructor() { }

  ngOnInit() {
  }

}
