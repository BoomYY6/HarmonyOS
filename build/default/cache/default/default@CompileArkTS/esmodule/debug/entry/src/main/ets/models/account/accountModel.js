import relationalStore from '@ohos:data.relationalStore';
import { ColumnType } from '@bundle:com.example.account_app/entry/ets/models/account/account';
import DBUtil from '@bundle:com.example.account_app/entry/ets/utils/DBUtil';
/**
 * 数据库建表语句
 */
const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type INTEGER NOT NULL,
    account_type INTEGER NOT NULL,
    amount DOUBLE NOT NULL,
    create_time INTEGER NOT NULL,
    description STRING,
    time INTEGER NOT NULL
  )`;
const COLUMNS = [
    { name: 'id', columnName: 'id', type: ColumnType.LONG },
    { name: 'type', columnName: 'type', type: ColumnType.LONG },
    { name: 'accountType', columnName: 'account_type', type: ColumnType.LONG },
    { name: 'amount', columnName: 'amount', type: ColumnType.DOUBLE },
    { name: 'createTime', columnName: 'create_time', type: ColumnType.LONG },
    { name: 'time', columnName: 'time', type: ColumnType.LONG },
    { name: 'description', columnName: 'description', type: ColumnType.STRING },
];
const TABLE_NAME = 'account';
const ID_COLUMN = 'id';
const DATE_COLUMN = 'time';
const TYPE_COLUMN = 'account_type';
class AccountModel {
    getCreateTableSql() {
        return CREATE_TABLE_SQL;
    }
    insert(record) {
        return DBUtil.insert(TABLE_NAME, record, COLUMNS);
    }
    deleteById(id) {
        const predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates.equalTo(ID_COLUMN, id);
        return DBUtil.delete(predicates);
    }
    queryByDateRange(startDate, endDate) {
        const predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates
            .greaterThanOrEqualTo(DATE_COLUMN, startDate)
            .and()
            .lessThanOrEqualTo(DATE_COLUMN, endDate);
        return DBUtil.queryForList(predicates, COLUMNS);
    }
    queryRangeAndType(startDate, endDate, type) {
        const predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates
            .greaterThanOrEqualTo(DATE_COLUMN, startDate)
            .and()
            .lessThanOrEqualTo(DATE_COLUMN, endDate)
            .and()
            .equalTo(TYPE_COLUMN, type);
        return DBUtil.queryForList(predicates, COLUMNS);
    }
    update(id, record) {
        const predicates = new relationalStore.RdbPredicates(TABLE_NAME);
        predicates.equalTo(ID_COLUMN, id);
        return DBUtil.update(predicates, record, COLUMNS);
    }
}
const accountModel = new AccountModel();
export default accountModel;
//# sourceMappingURL=accountModel.js.map