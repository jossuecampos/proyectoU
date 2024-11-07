/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PSUComponent } from './PSU.component';

describe('PSUComponent', () => {
  let component: PSUComponent;
  let fixture: ComponentFixture<PSUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
