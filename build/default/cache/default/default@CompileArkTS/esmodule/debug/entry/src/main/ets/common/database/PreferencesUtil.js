import dataPreferences from '@ohos:data.preferences';
import { GlobalContext } from '@bundle:com.example.account_app/entry/ets/common/utils/GlobalContext';
import Logger from '@bundle:com.example.account_app/entry/ets/common/utils/Logger';
const TAG = '[PreferencesUtil]';
const PREFERENCES_NAME = 'myPreferences';
const KEY_APP_FONT_SIZE = 'appFontSize';
/**
 * The PreferencesUtil provides preferences of create, save and query.
 */
export class PreferencesUtil {
    createFontPreferences(context) {
        let fontPreferences = (() => {
            let preferences = dataPreferences.getPreferences(context, PREFERENCES_NAME);
            return preferences;
        });
        GlobalContext.getContext().setObject('getFontPreferences', fontPreferences);
    }
    saveDefaultFontSize(fontSize) {
        let getFontPreferences = GlobalContext.getContext().getObject('getFontPreferences');
        getFontPreferences().then((preferences) => {
            preferences.has(KEY_APP_FONT_SIZE).then(async (isExist) => {
                Logger.info(TAG, 'preferences has changeFontSize is ' + isExist);
                if (!isExist) {
                    await preferences.put(KEY_APP_FONT_SIZE, fontSize);
                    preferences.flush();
                }
            }).catch((err) => {
                Logger.error(TAG, 'Has the value failed with err: ' + err);
            });
        }).catch((err) => {
            Logger.error(TAG, 'Get the preferences failed, err: ' + err);
        });
    }
    saveChangeFontSize(fontSize) {
        let getFontPreferences = GlobalContext.getContext().getObject('getFontPreferences');
        getFontPreferences().then(async (preferences) => {
            await preferences.put(KEY_APP_FONT_SIZE, fontSize);
            preferences.flush();
        }).catch((err) => {
            Logger.error(TAG, 'put the preferences failed, err: ' + err);
        });
    }
    async getChangeFontSize() {
        let fontSize = 0;
        let getFontPreferences = GlobalContext.getContext().getObject('getFontPreferences');
        fontSize = await (await getFontPreferences()).get(KEY_APP_FONT_SIZE, fontSize);
        return fontSize;
    }
    async deleteChangeFontSize() {
        let getFontPreferences = GlobalContext.getContext().getObject('getFontPreferences');
        const preferences = await getFontPreferences();
        let deleteValue = preferences.delete(KEY_APP_FONT_SIZE);
        deleteValue.then(() => {
            Logger.info(TAG, 'Succeeded in deleting the key appFontSize.');
        }).catch((err) => {
            Logger.error(TAG, 'Failed to delete the key appFontSize. Cause: ' + err);
        });
    }
}
export default new PreferencesUtil();
//# sourceMappingURL=PreferencesUtil.js.map