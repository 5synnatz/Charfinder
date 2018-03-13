import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpartComponent } from './startpart.component';

describe('StartpartComponent', () => {
  let component: StartpartComponent;
  let fixture: ComponentFixture<StartpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
