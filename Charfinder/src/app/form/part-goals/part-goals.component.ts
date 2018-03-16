import { Component} from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {GoalsData} from '../../formdata/goals-data/goals-data';

@Component({
  selector: 'app-part-goals',
  templateUrl: './part-goals.component.html',
  styleUrls: ['./part-goals.component.css']
})
export class PartGoalsComponent {

  constructor(public questions: Questions, public goalsData: GoalsData, public subtitles: Subtitles) { }


}
