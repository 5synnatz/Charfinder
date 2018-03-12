
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {FormBVersicherungenComponent} from './formular/form-b-versicherungen/form-b-versicherungen.component';

import {FormFAbzuegeComponent} from './formular/form-f-abzuege/form-f-abzuege.component';
import {FormCUnterhaltsanspruchComponent} from './formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import {FormJBesondereBelastungenComponent} from './formular/form-j-besondere-belastungen/form-j-besondere-belastungen.component';
import {FormHWohnkostenComponent} from './formular/form-h-wohnkosten/form-h-wohnkosten.component';
import {FormISonstigeVerpflichtungenComponent} from './formular/form-i-sonstige-verpflichtungen/form-i-sonstige-verpflichtungen.component';
import {FormEBruttoeinnahmenComponent} from './formular/form-e-bruttoeinnahmen/form-e-bruttoeinnahmen.component';
import {FormDGewaehrterUnterhaltComponent} from './formular/form-d-gewaehrter-unterhalt/form-d-gewaehrter-unterhalt.component';
import {FormGEigentumComponent} from './formular/form-g-eigentum/form-g-eigentum.component';
import {EndfensterComponent} from './formular/endfenster/endfenster.component';
import {part} from './part';
import {StartpartComponent} from './form/startpart/startpart.component';


/**
 * @author Thomas, Isi
 */
export class StepSpeicher {
  parts: part[] = [];

  constructor() {
    this.parts.push(new part('start', 'Beginn', StartpartComponent));
    this.parts.push(new part('person', 'Wer ist Dein Charakter?', partPersonComponent));
    this.parts.push(new part('skills', 'Welche Fähigkeiten hat Dein Charakter?', partskillsComponent));
    this.parts.push(new part('reactions', 'Welche reagiert Dein Charakter?', FormCUnterhaltsanspruchComponent));
    this.parts.push(new part('origin', 'Woher kommt Dein Charakter?', FormDGewaehrterUnterhaltComponent));
    this.parts.push(new part('goals', 'Wohin geht Dein Charakter?', FormEBruttoeinnahmenComponent));
    this.parts.push(new part('contacts', 'Welche Kontakte hat Dein Charakter', FormFAbzuegeComponent));
    this.parts.push(new part('end', 'Abschluss', FormGEigentumComponent));

  }

}
