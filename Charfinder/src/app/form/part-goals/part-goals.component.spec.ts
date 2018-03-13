import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGoalsComponent } from './part-goals.component';

describe('PartGoalsComponent', () => {
  let component: PartGoalsComponent;
  let fixture: ComponentFixture<PartGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
