import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublestrikeComponent } from './doublestrike.component';

describe('DoublestrikeComponent', () => {
  let component: DoublestrikeComponent;
  let fixture: ComponentFixture<DoublestrikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublestrikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublestrikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
