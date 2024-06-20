import dataRdb from '@ohos:data.relationalStore';
import TaskInfo from '@bundle:com.example.account_app/entry/ets/viewmodel/TaskInfo';
import CommonConstants from '@bundle:com.example.account_app/entry/ets/common/constants/CommonConstants';
import RdbUtils from '@bundle:com.example.account_app/entry/ets/common/database/rdb/RdbUtils';
import Logger from '@bundle:com.example.account_app/entry/ets/common/utils/Logger';
class TaskInfoApi {
    /**
     * insert taskInfo
     *
     * @param taskInfo
     * @param callback
     */
    insertData(taskInfo, callback) {
        const valueBucket = generateBucket(taskInfo);
        RdbUtils.insert('taskInfo', valueBucket).then(result => {
            callback(result);
        });
        Logger.info('TaskInfoTable', `Insert taskInfo {${taskInfo.title}:${taskInfo.taskID}} finished.`);
    }
    /**
     * delete taskInfo
     *
     * @param taskInfo
     * @param callback
     */
    deleteDataByID(taskInfo, callback) {
        let tableName = CommonConstants.TASK_INFO.tableName;
        if (!tableName) {
            return;
        }
        let predicates = new dataRdb.RdbPredicates(tableName);
        predicates.equalTo('taskID', taskInfo.taskID);
        RdbUtils.del(predicates).then(result => {
            callback(result);
        });
        Logger.info('TaskInfoTable', `Delete taskInfo {${taskInfo.title}:${taskInfo.taskID}} finished.`);
    }
    /**
     * update taskInfo
     *
     * @param taskInfo
     * @param callback
     */
    updateDataById(taskInfo, callback) {
        const valueBucket = generateBucket(taskInfo);
        let tableName = CommonConstants.TASK_INFO.tableName;
        if (!tableName) {
            return;
        }
        let predicates = new dataRdb.RdbPredicates(tableName);
        predicates.equalTo('taskID', taskInfo.taskID);
        RdbUtils.update(valueBucket, predicates).then((result) => {
            callback(result);
        });
        Logger.info('TaskInfoTable', `Update data {${taskInfo.title}:${taskInfo.taskID}} finished.`);
    }
    /**
     * query taskInfo
     *
     * @param date
     * @param callback
     */
    query(callback) {
        let tableName = CommonConstants.TASK_INFO.tableName;
        if (!tableName) {
            return;
        }
        let predicates = new dataRdb.RdbPredicates(tableName);
        predicates.orderByDesc('createTime');
        RdbUtils.query(predicates).then(resultSet => {
            let count = resultSet.rowCount;
            if (count === 0 || typeof count === 'string') {
                Logger.error('TaskInfoTable', `query no results!`);
                const result = [];
                callback(result);
            }
            else {
                resultSet.goToFirstRow();
                const result = [];
                for (let i = 0; i < count; i++) {
                    let tmp = new TaskInfo(0, 0, false, 0, '', '');
                    tmp.id = resultSet.getDouble(resultSet.getColumnIndex('id'));
                    tmp.createTime = resultSet.getLong(resultSet.getColumnIndex('createTime'));
                    tmp.taskID = resultSet.getDouble(resultSet.getColumnIndex('taskID'));
                    tmp.isDone = resultSet.getDouble(resultSet.getColumnIndex('isDone')) ? true : false;
                    tmp.title = resultSet.getString(resultSet.getColumnIndex('title'));
                    tmp.content = resultSet.getString(resultSet.getColumnIndex('content'));
                    result[i] = tmp;
                    resultSet.goToNextRow();
                }
                callback(result);
            }
        });
    }
}
function generateBucket(taskInfo) {
    var _a;
    let valueBucket = {};
    (_a = CommonConstants.TASK_INFO.columns) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
        if (item !== 'id') {
            switch (item) {
                case 'createTime':
                    valueBucket[item] = taskInfo.createTime;
                    break;
                case 'taskID':
                    valueBucket[item] = taskInfo.taskID;
                    break;
                case 'content':
                    valueBucket[item] = taskInfo.content;
                    break;
                case 'title':
                    valueBucket[item] = taskInfo.title;
                    break;
                case 'isDone':
                    valueBucket[item] = taskInfo.isDone;
                    break;
                default:
                    break;
            }
        }
    });
    return valueBucket;
}
let taskInfoApi = new TaskInfoApi();
export default taskInfoApi;
//# sourceMappingURL=TaskInfoApi.js.map