import { CrudTableMetadataHelper, CrudTableColumnMetadata } from './crud-table-metadata';

export function CrudTableModel(constructor: Function) {
    CrudTableMetadataHelper.mergeColumnMetadata(constructor.prototype);
}

export class CrudTableColumnDecoratorOptions {
    displayName?: string;
    columnPosition?: number;
}

export function CrudTableColumn(options?: CrudTableColumnDecoratorOptions) {
    return function(target: Object, propertyKey: string) {
        const preferredColumnName = (options === undefined) ? undefined : options.displayName;
        CrudTableMetadataHelper.addOrUpdateColumnMetadata(target, 0, propertyKey, preferredColumnName);
    };
}
