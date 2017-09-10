import 'reflect-metadata';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableComponent } from './crud-table.component';

import {
  MdTableModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

describe('CrudTableComponent', () => {
  let component: CrudTableComponent;
  let fixture: ComponentFixture<CrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdTableModule,
        CdkTableModule
      ],
      declarations: [ CrudTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
