import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormobreroComponent } from './formobrero.component';

describe('FormobreroComponent', () => {
  let component: FormobreroComponent;
  let fixture: ComponentFixture<FormobreroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormobreroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormobreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
