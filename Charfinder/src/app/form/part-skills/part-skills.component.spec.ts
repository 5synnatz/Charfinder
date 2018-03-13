import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSkillsComponent } from './part-skills.component';

describe('PartSkillsComponent', () => {
  let component: PartSkillsComponent;
  let fixture: ComponentFixture<PartSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
