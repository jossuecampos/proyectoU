/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductPageMotherboardComponent } from './productPageMotherboard.component';

describe('ProductPageMotherboardComponent', () => {
  let component: ProductPageMotherboardComponent;
  let fixture: ComponentFixture<ProductPageMotherboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageMotherboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageMotherboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
