import { Component } from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {StartData} from '../../formdata/start-data/start-data';

@Component({
  selector: 'app-startpart',
  templateUrl: './startpart.component.html',
  styleUrls: ['./startpart.component.css']
})
export class StartpartComponent {

  constructor(public Questions: Questions, public StartData: StartData, public Subtitles: Subtitles) { }


}
