import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {EndpartComponent} from './form/endpart/endpart.component';
import {StartpartComponent} from './form/startpart/startpart.component';
import {PartOriginComponent} from './form/part-origin/part-origin.component';
import {PartPersonComponent} from './form/part-person/part-person.component';
import {PartGoalsComponent} from './form/part-goals/part-goals.component';
import {PartContactsComponent} from './form/part-contacts/part-contacts.component';
import {PartSkillsComponent} from './form/part-skills/part-skills.component';
import {PartReactionsComponent} from './form/part-reactions/part-reactions.component';
import {NavigationService} from './navigation/navigation-service';
import {ContactsData} from './formdata/contacts-data/contacts-data';
import {GoalsData} from './formdata/goals-data/goals-data';
import {PersonData} from './formdata/person-data/person-data';
import {ReactionsData} from './formdata/reaction-data/reaction-data';
import {SkillsData} from './formdata/skills-data/skills-data';
import {StartData} from './formdata/start-data/start-data';
import {Subtitles} from './common/subtitles';
import {Questions} from './common/questions';
import {OriginData} from './formdata/origin-data/origin-data';
import {StepSpeicher} from './StepSpeicher';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EndpartComponent,
    StartpartComponent,
    PartOriginComponent,
    PartPersonComponent,
    PartGoalsComponent,
    PartContactsComponent,
    PartSkillsComponent,
    PartReactionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ContactsData,
    GoalsData,
    OriginData,
    PersonData,
    ReactionsData,
    SkillsData,
    StartData,
    Subtitles,
    Questions,
    NavigationService,
    StepSpeicher
  ],
  entryComponents: [
    EndpartComponent,
    StartpartComponent,
    PartOriginComponent,
    PartPersonComponent,
    PartGoalsComponent,
    PartContactsComponent,
    PartSkillsComponent,
    PartReactionsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
