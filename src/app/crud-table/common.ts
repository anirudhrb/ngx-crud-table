export class Newable {
    obj: any;

    constructor(type: any) {
       this.obj = new type();
    }

    getObject(): any {
        return this.obj;
    }
}
