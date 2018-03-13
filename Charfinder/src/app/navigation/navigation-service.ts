import {EventEmitter, Injectable} from '@angular/core';
import {StepSpeicher} from '../StepSpeicher';

import {part} from '../part';

/**
 * @author Isabella
 **/
@Injectable()
export class NavigationService {
  private _currentPart: part;

  public allNavButtonsString: string[];
  public formChanged: EventEmitter<part>;

  public constructor(private stepspeicher: StepSpeicher) {
    this._currentPart = this.stepspeicher.parts[0];
    this.allNavButtonsString = [];
    this.formChanged = new EventEmitter<part>();
    this.initializeNavButtonStrings();
  }

  public get currentPart(): part {
    return this._currentPart;
  }

  public set currentPart(part: part) {
    this._currentPart = this.stepspeicher.parts.find(a => a.id === part.id);
    this.formChanged.emit(this._currentPart);
  }

  public get alleAbschnitte(): part[] {
    return this.stepspeicher.parts;
  }

  public initializeNavButtonStrings() {
    this.allNavButtonsString = this.stepspeicher.parts.map(part => part.id);
  }
}
