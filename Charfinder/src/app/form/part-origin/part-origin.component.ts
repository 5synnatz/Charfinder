import { Component} from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {OriginData} from '../../formdata/origin-data/origin-data';

@Component({
  selector: 'app-part-origin',
  templateUrl: './part-origin.component.html',
  styleUrls: ['./part-origin.component.css']
})
export class PartOriginComponent  {

  constructor(public questions: Questions, public originData: OriginData, public subtitles: Subtitles) { }


}
