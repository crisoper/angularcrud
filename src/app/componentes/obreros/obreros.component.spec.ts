import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrerosComponent } from './obreros.component';

describe('ObrerosComponent', () => {
  let component: ObrerosComponent;
  let fixture: ComponentFixture<ObrerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
