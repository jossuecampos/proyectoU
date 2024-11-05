/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HddComponent } from './hdd.component';

describe('HddComponent', () => {
  let component: HddComponent;
  let fixture: ComponentFixture<HddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
