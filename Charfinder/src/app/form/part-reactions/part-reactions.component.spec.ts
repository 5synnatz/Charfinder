import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartReactionsComponent } from './part-reactions.component';

describe('PartReactionsComponent', () => {
  let component: PartReactionsComponent;
  let fixture: ComponentFixture<PartReactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartReactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
