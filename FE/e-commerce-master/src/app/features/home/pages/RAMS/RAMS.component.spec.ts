/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RAMSComponent } from './RAMS.component';

describe('RAMSComponent', () => {
  let component: RAMSComponent;
  let fixture: ComponentFixture<RAMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RAMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RAMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
