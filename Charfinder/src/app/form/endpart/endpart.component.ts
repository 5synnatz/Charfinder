import { Component} from '@angular/core';
import {Questions} from '../../common/questions';
import {Subtitles} from '../../common/subtitles';

@Component({
  selector: 'app-endpart',
  templateUrl: './endpart.component.html',
  styleUrls: ['./endpart.component.css']
})
export class EndpartComponent {

  constructor(public questions: Questions, public subtitles: Subtitles) { }


}
