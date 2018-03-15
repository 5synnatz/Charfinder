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
    this.abschnitte.push(new Abschnitt('Start', 'Beginn', StartpartComponent));
    this.abschnitte.push(new Abschnitt('Person', 'Personendaten', PartPersonComponent));
    this.abschnitte.push(new Abschnitt('Fähigkeiten', 'Versicherungen', PartSkillsComponent));
    this.abschnitte.push(new Abschnitt('Reaktionen', 'Unterhaltsanspruch', PartReactionsComponent));
    this.abschnitte.push(new Abschnitt('Herkunft', 'GewaehrterUnterhalt', PartOriginComponent));
    this.abschnitte.push(new Abschnitt('Ziele', 'Bruttoeinnahmen', PartGoalsComponent));
    this.abschnitte.push(new Abschnitt('Kontakte', 'Abzuege', PartContactsComponent));
    this.abschnitte.push(new Abschnitt('Ende', 'Eigentum', EndpartComponent));

  }
}
