
import {part} from './part';
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
  parts: part[] = [];

  constructor() {
    this.parts.push(new part('start', 'Beginn', StartpartComponent));
    this.parts.push(new part('person', 'Wer ist Dein Charakter?', PartPersonComponent));
    this.parts.push(new part('skills', 'Welche Fähigkeiten hat Dein Charakter?', PartSkillsComponent));
    this.parts.push(new part('reactions', 'Welche reagiert Dein Charakter?', PartReactionsComponent));
    this.parts.push(new part('origin', 'Woher kommt Dein Charakter?', PartOriginComponent));
    this.parts.push(new part('goals', 'Wohin geht Dein Charakter?', PartGoalsComponent));
    this.parts.push(new part('contacts', 'Welche Kontakte hat Dein Charakter?', PartContactsComponent));
    this.parts.push(new part('end', 'Abschluss', EndpartComponent));

  }

}
