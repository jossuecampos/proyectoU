/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcerComponent } from './acer.component';

describe('AcerComponent', () => {
  let component: AcerComponent;
  let fixture: ComponentFixture<AcerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
