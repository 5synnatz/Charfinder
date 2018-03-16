import { Component} from '@angular/core';
import {Subtitles} from '../../common/subtitles';
import {Questions} from '../../common/questions';
import {ContactsData} from '../../formdata/contacts-data/contacts-data';

@Component({
  selector: 'app-part-contacts',
  templateUrl: './part-contacts.component.html',
  styleUrls: ['./part-contacts.component.css']
})
export class PartContactsComponent  {

  constructor(public questions: Questions, public contactsData: ContactsData, public subtitles: Subtitles) { }


}
