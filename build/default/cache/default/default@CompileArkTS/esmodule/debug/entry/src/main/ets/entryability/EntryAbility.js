import UIAbility from '@ohos:app.ability.UIAbility';
import hilog from '@ohos:hilog';
import PreferenceUtil from '@bundle:com.example.account_app/entry/ets/utils/PreferenceUtil';
import DBUtil from '@bundle:com.example.account_app/entry/ets/utils/DBUtil';
import AccountModel from '@bundle:com.example.account_app/entry/ets/models/account/accountModel';
import RdbUtils from '@bundle:com.example.account_app/entry/ets/common/database/rdb/RdbUtils';
import CommonConstants from '@bundle:com.example.account_app/entry/ets/common/constants/CommonConstants';
import { columnTaskInfoInfoList } from '@bundle:com.example.account_app/entry/ets/models/RdbColumnModel';
export default class EntryAbility extends UIAbility {
    async onCreate(want, launchParam) {
        // 加载首选项
        PreferenceUtil.loadPreference(this.context);
        // 初始化数据库
        await DBUtil.initDB(this.context);
        // 创建数据表
        await DBUtil.createTable(AccountModel.getCreateTableSql());
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
        //初始化数据库，创建表
        RdbUtils.initDb(this.context, CommonConstants.RDB_NAME.dbName ? CommonConstants.RDB_NAME.dbName : '');
        await RdbUtils.createDb();
        RdbUtils.createTable(CommonConstants.TASK_INFO.tableName ? CommonConstants.TASK_INFO.tableName : '', columnTaskInfoInfoList).then(() => {
        }).catch((err) => {
        });
    }
    onDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        windowStage.loadContent('pages/Mine/denglu', (err, data) => {
            var _a, _b;
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', (_a = JSON.stringify(err)) !== null && _a !== void 0 ? _a : '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', (_b = JSON.stringify(data)) !== null && _b !== void 0 ? _b : '');
        });
    }
    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground() {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground() {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
}
//# sourceMappingURL=EntryAbility.js.map