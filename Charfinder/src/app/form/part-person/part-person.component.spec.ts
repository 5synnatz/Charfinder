import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartPersonComponent } from './part-person.component';

describe('PartPersonComponent', () => {
  let component: PartPersonComponent;
  let fixture: ComponentFixture<PartPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
