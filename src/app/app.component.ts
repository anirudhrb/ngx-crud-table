import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { CrudTableColumn, CrudTableModel, CrudTableColumnDecoratorOptions } from './crud-table/decorators';
import { Newable } from './crud-table/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fooData: FooDataSource;
  dataType: Newable;

  constructor() {
    const fooModels = [];
    fooModels.push(new FooModel('hello', 'world'), new FooModel('goodbye', 'world'));
    this.fooData = new FooDataSource(fooModels);
    this.dataType = new Newable(FooModel);
  }
}

@CrudTableModel
class FooModel {
  @CrudTableColumn({ displayName: 'Key' })
  key: string;

  @CrudTableColumn({ displayName: 'Foo Model Name' })
  name: string;

  constructor(key, name) {
    this.key = key;
    this.name = name;
  }
}

class FooDataSource extends DataSource<FooModel> {
  constructor(private data: FooModel[]) {
    super();
  }

  connect(): Observable<FooModel[]> {
    return Observable.of(this.data);
  }

  disconnect(): void {
  }
}
