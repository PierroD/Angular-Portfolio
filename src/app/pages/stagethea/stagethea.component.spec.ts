import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagetheaComponent } from './stagethea.component';

describe('StagetheaComponent', () => {
  let component: StagetheaComponent;
  let fixture: ComponentFixture<StagetheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagetheaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagetheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
