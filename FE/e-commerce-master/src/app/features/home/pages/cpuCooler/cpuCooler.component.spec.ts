/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CpuCoolerComponent } from './cpuCooler.component';

describe('CpuCoolerComponent', () => {
  let component: CpuCoolerComponent;
  let fixture: ComponentFixture<CpuCoolerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuCoolerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuCoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
