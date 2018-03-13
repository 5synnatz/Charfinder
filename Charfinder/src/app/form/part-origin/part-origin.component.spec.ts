import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOriginComponent } from './part-origin.component';

describe('PartOriginComponent', () => {
  let component: PartOriginComponent;
  let fixture: ComponentFixture<PartOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
