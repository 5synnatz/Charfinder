import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartContactsComponent } from './part-contacts.component';

describe('PartContactsComponent', () => {
  let component: PartContactsComponent;
  let fixture: ComponentFixture<PartContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
