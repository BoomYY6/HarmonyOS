import dataRdb from '@ohos:data.relationalStore';
import { RdbHelperImp } from '@bundle:com.example.account_app/entry/ets/common/database/rdb/RdbHelperImp';
import Logger from '@bundle:com.example.account_app/entry/ets/common/utils/Logger';
let dbContext;
let mDatabaseName = '';
export class RdbUtils {
    constructor() {
        this.rdbHelpers = new Map();
    }
    //初始化数据库
    initDb(context, databaseName) {
        dbContext = context;
        mDatabaseName = databaseName;
    }
    //创建数据库
    createDb() {
        return new Promise((success, error) => {
            let dbName = mDatabaseName;
            if (!dbContext || !dbName || dbName.length === 0) {
                error("init err");
                return;
            }
            let dbHelper = this.rdbHelpers.get(dbName);
            if (!dbHelper) {
                Logger.info(`initRdb  RdbUtils success`);
                let rdbHelper = new RdbHelperImp(dbName);
                rdbHelper.getRdb(dbContext).then(data => {
                    this.rdbHelpers.set(dbName, data);
                    success(data);
                }).catch((err) => {
                    error(err);
                });
            }
            else {
                success(dbHelper);
            }
        });
    }
    //删除数据库
    deleteDb(context, dbName) {
        this.rdbHelpers.delete(dbName);
        return dataRdb.deleteRdbStore(context, dbName);
    }
    //创建表
    createTable(tableName, columns) {
        return this.createDb().then(dbHelper => {
            return dbHelper.createTable(tableName, columns);
        });
    }
    isCreateTable(tableName, columns) {
        return this.createTable(tableName, columns).then(() => {
            return true;
        }).catch((error) => {
            Logger.error('RdbUtils', 'create table error ' + JSON.stringify(error));
            return false;
        });
    }
    deleteTable(tableName) {
        return this.createDb().then(dbHelper => {
            return dbHelper.deleteTable(tableName);
        });
    }
    //执行sql命令
    executeSql(sql) {
        return this.createDb().then(dbHelper => {
            return dbHelper.executeSql(sql);
        });
    }
    addTableColumn(tableName, column) {
        return this.createDb().then(dbHelper => {
            return dbHelper.addTableColumn(tableName, column);
        });
    }
    //插入
    insert(tableName, values) {
        return this.createDb().then(dbHelper => {
            return dbHelper.insert(tableName, values);
        });
    }
    //更新
    update(values, rdbPredicates) {
        return this.createDb().then(dbHelper => {
            return dbHelper.update(values, rdbPredicates);
        });
    }
    //查询
    query(rdbPredicates, columns) {
        return this.createDb().then(dbHelper => {
            return dbHelper.query(rdbPredicates, columns);
        });
    }
    queryAll(tableName) {
        return this.createDb().then(dbHelper => {
            return dbHelper.queryAll(tableName);
        });
    }
    queryBySql(sql, bindArgs) {
        return this.createDb().then(dbHelper => {
            return dbHelper.queryBySql(sql, bindArgs);
        });
    }
    del(rdbPredicates) {
        return this.createDb().then(dbHelper => {
            return dbHelper.delete(rdbPredicates);
        });
    }
}
let rdbUtils = new RdbUtils();
export default rdbUtils;
//# sourceMappingURL=RdbUtils.js.map