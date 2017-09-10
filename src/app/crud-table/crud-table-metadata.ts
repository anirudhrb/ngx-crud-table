export class CrudTableColumnMetadata {
    propertyName: string;
    displayName: string;
    position: number;

    constructor(propertyName: string, columnName: string, position: number) {
        this.propertyName = propertyName;
        this.displayName = columnName;
        this.position = position;
    }
}

const CrudTableColumnKeyPrefix = 'custom:crudTableColumn:';
const CrudTableColumnMetadataKey = 'custom:crudTableColumnMetadata';

export class CrudTableMetadataHelper {
    static addOrUpdateColumnMetadata(target: object, columnPosition: number, propertyName: string, preferredColumnName?: string): void {
        const inferredColumnName: string = (preferredColumnName === undefined) ? propertyName : preferredColumnName;
        const metadata: CrudTableColumnMetadata = new CrudTableColumnMetadata(propertyName, inferredColumnName, columnPosition);
        Reflect.defineMetadata(CrudTableColumnKeyPrefix + propertyName, metadata, target);
    }

    static mergeColumnMetadata(target: object): void {
        const mergedMetadata: CrudTableColumnMetadata[] = [];
        const keys = Reflect.getMetadataKeys(target);
        keys.forEach(function(propertyKey) {
            mergedMetadata.push(<CrudTableColumnMetadata>(Reflect.getMetadata(propertyKey, target)));
            Reflect.deleteMetadata(propertyKey, target);
        });
        Reflect.defineMetadata(CrudTableColumnMetadataKey, mergedMetadata, target);
    }

    static getColumnsMetadata(target: object): CrudTableColumnMetadata[] {
        return Reflect.getMetadata(CrudTableColumnMetadataKey, target);
    }

    static getDisplayedColumns(target: object): CrudTableColumnMetadata[] {
        return Reflect.getMetadata(CrudTableColumnMetadataKey, target);
    }
}
