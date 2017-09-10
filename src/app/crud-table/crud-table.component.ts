import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { CrudTableMetadataHelper, CrudTableColumnMetadata } from './crud-table-metadata';
import { Newable } from './common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  @Input() dataSource: DataSource<any>;
  @Input() dataType: Newable;

  displayedColumns: CrudTableColumnMetadata[];
  displayedColumnNames: string[];
  fooData: DataSource<any>;

  constructor() {
  }

  ngOnInit() {
    this.displayedColumns = CrudTableMetadataHelper.getDisplayedColumns(this.dataType.getObject());
    this.displayedColumnNames = this.displayedColumns.map(column => column.propertyName);
  }
}
