import {Abschnitt} from './abschnitt';

import {StartpartComponent} from './form/startpart/startpart.component';
import {PartPersonComponent} from './form/part-person/part-person.component';
import {PartSkillsComponent} from './form/part-skills/part-skills.component';
import {PartReactionsComponent} from './form/part-reactions/part-reactions.component';
import {PartOriginComponent} from './form/part-origin/part-origin.component';
import {PartGoalsComponent} from './form/part-goals/part-goals.component';
import {PartContactsComponent} from './form/part-contacts/part-contacts.component';
import {EndpartComponent} from './form/endpart/endpart.component';


/**
 * @author Thomas, Isi
 */
export class StepSpeicher {
  abschnitte: Abschnitt[] = [];

  constructor() {
    this.abschnitte.push(new Abschnitt('0', 'Beginn', StartpartComponent));
    this.abschnitte.push(new Abschnitt('A', 'Personendaten', PartPersonComponent));
    this.abschnitte.push(new Abschnitt('B', 'Versicherungen', PartSkillsComponent));
    this.abschnitte.push(new Abschnitt('C', 'Unterhaltsanspruch', PartReactionsComponent));
    this.abschnitte.push(new Abschnitt('D', 'GewaehrterUnterhalt', PartOriginComponent));
    this.abschnitte.push(new Abschnitt('E', 'Bruttoeinnahmen', PartGoalsComponent));
    this.abschnitte.push(new Abschnitt('F', 'Abzuege', PartContactsComponent));
    this.abschnitte.push(new Abschnitt('9', 'Eigentum', EndpartComponent));

  }
}
