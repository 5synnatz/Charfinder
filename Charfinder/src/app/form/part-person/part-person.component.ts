import { Component} from '@angular/core';
import {Questions} from '../../common/questions';
import {Subtitles} from '../../common/subtitles';
import {PersonData} from '../../formdata/person-data/person-data';

@Component({
  selector: 'app-part-person',
  templateUrl: './part-person.component.html',
  styleUrls: ['./part-person.component.css']
})
export class PartPersonComponent {

  constructor(public questions: Questions, public personData: PersonData, public subtitles: Subtitles) { }


}
