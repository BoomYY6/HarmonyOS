import relationalStore from '@ohos:data.relationalStore';
import { Logger } from '@bundle:com.example.account_app/entry/ets/utils/Logger';
import { ColumnType } from '@bundle:com.example.account_app/entry/ets/models/account/account';
const DB_FILENAME = 'account.db';
class DBUtil {
    //定义一个数据库配置对象
    initDB(context) {
        const config = {
            name: DB_FILENAME,
            securityLevel: relationalStore.SecurityLevel.S1, //安全级别
        };
        //返回一个Promise，该Promise将在数据库成功初始化时resolve，或者在初始化失败时reject
        return new Promise((resolve, reject) => {
            relationalStore.getRdbStore(context, config)
                .then(rdbStore => {
                //将获取到的数据库存储实例保存到类的属性中
                this.rdbStore = rdbStore;
                Logger.debug('rdbStore 初始化完成');
                resolve();
            })
                .catch(err => {
                Logger.debug('rdbStore 初始化异常', err); //打印调试信息，包括错误堆栈
                reject(err);
            });
        });
    }
    createTable(createSQL) {
        return new Promise((resolve, reject) => {
            this.rdbStore.executeSql(createSQL)
                .then(() => {
                Logger.debug('数据表创建成功', createSQL);
                resolve();
            })
                .catch(err => {
                Logger.debug('数据表创建失败', err);
                reject();
            });
        });
    }
    insert(tableName, obj, columns) {
        return new Promise((resolve, reject) => {
            this.rdbStore.insert(tableName, this.buildValueBucket(obj, columns), (err, id) => {
                if (err) {
                    Logger.debug('新增数据失败', err);
                    reject(err);
                }
                else {
                    Logger.debug('新增数据成功, 新增ID: ', id);
                    resolve(id);
                }
            });
        });
    }
    delete(predicates) {
        return new Promise((resolve, reject) => {
            this.rdbStore.delete(predicates, (err, rows) => {
                if (err) {
                    Logger.debug('新增数据失败', err);
                    reject(err);
                }
                else {
                    Logger.debug('新增数据成功, 删除行数: ', rows);
                    resolve(rows);
                }
            });
        });
    }
    update(predicates, obj, columns) {
        return new Promise((resolve, reject) => {
            this.rdbStore.update(this.buildValueBucket(obj, columns), predicates, (err, rows) => {
                if (err) {
                    Logger.debug('更新数据失败', err);
                    reject(err);
                }
                else {
                    Logger.debug('更新数据成功, 更新行数: ', rows);
                    resolve(rows);
                }
            });
        });
    }
    // 定义一个泛型方法，用于根据指定的查询条件和列信息从数据库中查询数据列表
    queryForList(predicates, columns) {
        return new Promise((resolve, reject) => {
            // 使用 map 方法将 ColumnInfo 列表转换为列名列表
            this.rdbStore.query(predicates, columns.map(info => info.columnName), (err, result) => {
                if (err) {
                    Logger.debug('查询数据失败', err);
                    reject(err);
                }
                else {
                    Logger.debug('查询数据成功, 查询总数: ', result.rowCount);
                    resolve(this.parseResultSet(result, columns)); //解析查询结果集，将其转换为T类型的数组
                }
            });
        });
    }
    //用于根据给定的对象和列信息构建一个值桶
    buildValueBucket(obj, columns) {
        const value = {};
        columns.forEach(info => {
            const val = obj[info.name];
            if (val !== undefined) {
                value[info.columnName] = val;
            }
        });
        return value;
    }
    //用于将数据库查询结果集解析为指定类型T的数组
    parseResultSet(result, columns) {
        const arr = [];
        if (result.rowCount <= 0) {
            return arr;
        }
        while (!result.isAtLastRow) {
            result.goToNextRow();
            const obj = {};
            columns.forEach(info => {
                let val = null;
                switch (info.type) {
                    case ColumnType.LONG:
                        val = result.getLong(result.getColumnIndex(info.columnName));
                        break;
                    case ColumnType.DOUBLE:
                        val = result.getDouble(result.getColumnIndex(info.columnName));
                        break;
                    case ColumnType.STRING:
                        val = result.getString(result.getColumnIndex(info.columnName));
                        break;
                    case ColumnType.BLOB:
                        val = result.getBlob(result.getColumnIndex(info.columnName));
                        break;
                }
                obj[info.name] = val; //用name作为键
            });
            arr.push(obj); //将当前行数据添加到数组中
        }
        return arr; //返回解析后的数据数组
    }
}
export default new DBUtil();
//# sourceMappingURL=DBUtil.js.map