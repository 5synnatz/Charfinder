import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpartComponent } from './endpart.component';

describe('EndpartComponent', () => {
  let component: EndpartComponent;
  let fixture: ComponentFixture<EndpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
