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

  constructor(public questions: Questions, public skillsData: SkillsData, public subtitles: Subtitles) { }


}
