import { Component} from '@angular/core';
import {ViewSwitchService} from '../view-switch-service';

@Component({
  selector: 'app-nav-bar-switch',
  templateUrl: './nav-bar-switch.component.html',
  styleUrls: ['./nav-bar-switch.component.css']
})
export class NavBarSwitchComponent {

  constructor(private viewSwitchService: ViewSwitchService) { }

  public get allNavButtons(): string[] {
    return this.viewSwitchService.allNavButtonsString;
  }

  public get currentFormString(): string {
    return this.viewSwitchService.currentAbschnitt.id;
  }

  public showFormBefore() {
    // not the first form
    if (this.currentFormString !== this.allNavButtons[0]) {
      const indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) - 1;
      this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
    }
  }

  public showFormAfter() {
    const indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) + 1;
    this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
  }

}
