import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroshockComponent } from './electroshock.component';

describe('ElectroshockComponent', () => {
  let component: ElectroshockComponent;
  let fixture: ComponentFixture<ElectroshockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectroshockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroshockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
