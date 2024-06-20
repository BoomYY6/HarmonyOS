import dataPreferences from '@ohos:data.preferences';
let context = getContext(this);
/**
 * 项目全局存储，使用ohos.data.preferences
 */
const defaultPreferenceName = "OPEN_EYE_PREFERENCES";
export class StorageUtils {
    /**
     * 存入
     * 获取Prefer实例
     * @param preferenceName
     * @returns
     */
    static async getPreferences(preferenceName = defaultPreferenceName) {
        return await dataPreferences.getPreferences(context, preferenceName);
    }
    static async put(key, value, preferenceName = defaultPreferenceName) {
        if (preferenceName !== null) {
            // 获取实例
            let preferences = await this.getPreferences(preferenceName);
            preferences.put(key, value);
            preferences.flush();
        }
    }
    /**
     * 获取值
     * @param key
     * @param defaultValue
     * @param preferenceName
     * @returns
     */
    static async get(key, defaultValue = "", preferenceName = defaultPreferenceName) {
        // 获取实例
        let preferences = await this.getPreferences(preferenceName);
        return preferences.get(key, defaultValue);
    }
    /**
     * 删除值
     * @param key
     * @param preferenceName
     * @returns
     */
    static async delete(key, preferenceName = defaultPreferenceName) {
        let preferences = await this.getPreferences(preferenceName);
        return await preferences.delete(key);
    }
    /**
     * 清空
     * @param preferenceName
     * @returns
     */
    static async clear(preferenceName = defaultPreferenceName) {
        let preferences = await this.getPreferences(preferenceName);
        return await preferences.clear();
    }
}
//# sourceMappingURL=StorageUtils.js.map