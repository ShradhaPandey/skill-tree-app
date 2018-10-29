import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowstormComponent } from './snowstorm.component';

describe('SnowstormComponent', () => {
  let component: SnowstormComponent;
  let fixture: ComponentFixture<SnowstormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowstormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowstormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
