import { Component} from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {ReactionsData} from '../../formdata/reaction-data/reaction-data';

@Component({
  selector: 'app-part-reactions',
  templateUrl: './part-reactions.component.html',
  styleUrls: ['./part-reactions.component.css']
})
export class PartReactionsComponent {

  constructor(public Questions: Questions, public ReactionsData: ReactionsData, public Subtitles: Subtitles) { }


}
