import dataRdb from '@ohos:data.relationalStore';
import tableHelper from '@bundle:com.example.account_app/entry/ets/common/database/rdb/TableHelper';
import Logger from '@bundle:com.example.account_app/entry/ets/common/utils/Logger';
export class RdbHelperImp {
    constructor(databaseName) {
        this.rdbStore = {};
        this.storeConfig = { name: '', securityLevel: dataRdb.SecurityLevel.S1 };
        this.mDatabaseName = databaseName;
    }
    getDbName() {
        return this.mDatabaseName;
    }
    getRdb(context) {
        this.storeConfig = {
            name: this.mDatabaseName, securityLevel: dataRdb.SecurityLevel.S1
        };
        return new Promise((success, error) => {
            dataRdb.getRdbStore(context, this.storeConfig).then(dbStore => {
                this.rdbStore = dbStore;
                success(this);
            }).catch((err) => {
                Logger.error(`initRdb err : ${JSON.stringify(err)}`);
                error(err);
            });
        });
    }
    executeSql(sql) {
        Logger.info(`executeSql sql : ${sql}`);
        return this.rdbStore.executeSql(sql);
    }
    createTable(tableName, columns) {
        Logger.info(`createTable tableName : ${tableName}, columns : ${JSON.stringify(columns)}`);
        let createTableSql = tableHelper.createTableSql(tableName, columns);
        return this.executeSql(createTableSql);
    }
    deleteTable(tableName) {
        Logger.info(`deleteTable tableName : ${tableName}`);
        let deleteTableSql = tableHelper.deleteTableSql(tableName);
        return this.executeSql(deleteTableSql);
    }
    addTableColumn(tableName, column) {
        Logger.info(`addTableColumn tableName : ${tableName}, column : ${JSON.stringify(column)}`);
        let addTableColumnSql = tableHelper.addTableColumnSql(tableName, column);
        return this.executeSql(addTableColumnSql);
    }
    insert(tableName, values) {
        return new Promise((success, error) => {
            Logger.info(`insert tableName : ${tableName}, values : ${JSON.stringify(values)}`);
            if (!values) {
                Logger.info(`insert failed, values is undefined`);
                error(0);
                return;
            }
            if (values instanceof Array) {
                Logger.info(`insert values isArray = ${values.length}`);
                this.rdbStore.beginTransaction();
                this.saveArray(tableName, values).then(data => {
                    Logger.info(`insert success, data : ${JSON.stringify(data)}`);
                    success(data);
                    this.rdbStore.commit();
                }).catch((err) => {
                    Logger.error(`insert failed, err : ${err}`);
                    error(err);
                    this.rdbStore.commit();
                });
            }
            else {
                this.rdbStore.insert(tableName, values).then(data => {
                    Logger.info(`insert success id : ${data}`);
                    success(data);
                    this.rdbStore.commit();
                }).catch((err) => {
                    Logger.error(`insert failed, err : ${err.message}`);
                    Logger.error(`insert failed, err : ${JSON.stringify(err)}`);
                    error(err);
                    this.rdbStore.commit();
                });
            }
        });
    }
    saveArray(tableName, values) {
        return new Promise((success, error) => {
            if (!values || values.length === 0) {
                error(0);
                return;
            }
            let index = 0;
            let callback = (data, err) => {
                if (err) {
                    Logger.info(`saveArray failed, err : ${err}`);
                    error(err);
                    return;
                }
                if (data) {
                    if (index < values.length - 1) {
                        this.saveData(tableName, values, ++index, callback);
                    }
                    else {
                        success(data);
                    }
                }
            };
            this.saveData(tableName, values, index, callback);
        });
    }
    saveData(tableName, values, index, callback) {
        Logger.info(`saveData tableName : ${tableName}, index : ${JSON.stringify(index)}`);
        this.rdbStore.insert(tableName, values[index]).then((data) => {
            Logger.info(`saveData success id : ${data}`);
            callback(data);
        }).catch((err) => {
            Logger.error(`saveData failed, err : ${err}`);
            callback(err);
        });
    }
    update(values, rdbPredicates) {
        return this.rdbStore.update(values, rdbPredicates);
    }
    query(rdbPredicates, columns) {
        Logger.info(`query rdbPredicates : ${JSON.stringify(rdbPredicates)}`);
        return this.rdbStore.query(rdbPredicates, columns);
    }
    queryAll(tableName) {
        Logger.info(`queryAllSize tableName : ${tableName}`);
        return this.rdbStore.querySql(`select * from ${tableName}`);
    }
    queryBySql(sql, bindArgs) {
        Logger.info(`queryBySql sql : ${sql}`);
        return this.rdbStore.querySql(sql, bindArgs);
    }
    delete(rdbPredicates) {
        Logger.info(`delete rdbPredicates : ${JSON.stringify(rdbPredicates)}`);
        return this.rdbStore.delete(rdbPredicates);
    }
}
//# sourceMappingURL=RdbHelperImp.js.map