import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeillesComponent } from './veilles.component';

describe('VeillesComponent', () => {
  let component: VeillesComponent;
  let fixture: ComponentFixture<VeillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
