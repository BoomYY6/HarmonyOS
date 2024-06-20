export class GlobalContext {
    constructor() {
        this._objects = new Map();
    }
    static getContext() {
        if (!GlobalContext.instance) {
            GlobalContext.instance = new GlobalContext();
        }
        return GlobalContext.instance;
    }
    getObject(value) {
        return this._objects.get(value);
    }
    setObject(key, objectClass) {
        this._objects.set(key, objectClass);
    }
}
//# sourceMappingURL=GlobalContext.js.map