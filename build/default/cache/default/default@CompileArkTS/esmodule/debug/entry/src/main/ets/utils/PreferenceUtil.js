import preferences from '@ohos:data.preferences';
import * as CONSTANTS from '@bundle:com.example.account_app/entry/ets/common/constants';
import { Logger } from '@bundle:com.example.account_app/entry/ets/utils/Logger';
class PreferenceUtils {
    async loadPreference(context) {
        try {
            this.pref = await preferences.getPreferences(context, "Test");
            Logger.debug(`加载 Preference [${CONSTANTS.H_STORE}] 成功`);
        }
        catch (err) {
            Logger.debug(`加载 Preference [${CONSTANTS.H_STORE}] 失败`, err);
        }
    }
    async putPreferenceValue(key, value) {
        if (!this.pref) {
            Logger.debug(`Preference [${CONSTANTS.H_STORE}] 尚未初始化`);
            return;
        }
        try {
            // 写入数据
            await this.pref.put(key, value);
            // 刷盘
            await this.pref.flush();
            Logger.debug(`保存 Preference [${key} = ${value}] 成功`);
        }
        catch (err) {
            Logger.debug(`保存 Preference [${key} = ${value}] 失败`, err);
        }
    }
    async getPreferenceValue(key, defaultValue) {
        if (!this.pref) {
            Logger.debug(`Preference [${CONSTANTS.H_STORE}] 尚未初始化`);
            return;
        }
        try {
            const value = await this.pref.get(key, defaultValue);
            Logger.debug(`读取 Preference [${key} = ${value}] 成功`);
            return value;
        }
        catch (err) {
            Logger.debug(`读取 Preference [${key}] 失败`, err);
        }
    }
}
export default new PreferenceUtils();
//# sourceMappingURL=PreferenceUtil.js.map