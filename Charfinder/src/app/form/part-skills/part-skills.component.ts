import { Component, OnInit } from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {SkillsData} from '../../formdata/skills-data/skills-data';

;

@Component({
  selector: 'app-part-skills',
  templateUrl: './part-skills.component.html',
  styleUrls: ['./part-skills.component.css']
})
export class PartSkillsComponent {

  constructor(public Questions: Questions, public SkillsData: SkillsData, public Subtitles: Subtitles) { }


}
