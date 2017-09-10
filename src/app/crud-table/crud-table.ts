import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTableComponent } from './crud-table.component';

import {
  MdTableModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MdTableModule,
    CdkTableModule
  ],
  declarations: [CrudTableComponent],
  exports: [
    CrudTableComponent
  ]
})
export class CrudTableModule { }
