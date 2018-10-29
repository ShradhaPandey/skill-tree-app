import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundhousekickComponent } from './roundhousekick.component';

describe('RoundhousekickComponent', () => {
  let component: RoundhousekickComponent;
  let fixture: ComponentFixture<RoundhousekickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundhousekickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundhousekickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
