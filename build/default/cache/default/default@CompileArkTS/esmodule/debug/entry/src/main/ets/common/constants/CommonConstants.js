import relationalStore from '@ohos:data.relationalStore';
export default class CommonConstants {
}
/**
 * Small font size.
 */
CommonConstants.SET_SIZE_SMALL = 0.8;
/**
 * Normal font size.
 */
CommonConstants.SET_SIZE_NORMAL = 1;
/**
 * Large font size.
 */
CommonConstants.SET_SIZE_LARGE = 1.2;
/**
 * Extra large font size.
 */
CommonConstants.SET_SIZE_EXTRA_LARGE = 1.4;
/**
 * Huge font size.
 */
CommonConstants.SET_SIZE_HUGE = 1.6;
/**
 * Slider min value.
 */
CommonConstants.SET_SLIDER_MIN = 0.8;
/**
 * Slider max value.
 */
CommonConstants.SET_SLIDER_MAX = 1.6;
/**
 * Slider step length.
 */
CommonConstants.SET_SLIDER_STEP = 0.2;
CommonConstants.STORE_CONFIG = {
    name: 'database.db',
    securityLevel: relationalStore.SecurityLevel.S1
};
CommonConstants.RDB_NAME = { dbName: 'taskInfo.db' }; // db name
// radius
CommonConstants.BORDER_RADIUS_PERCENT_50 = '50%';
CommonConstants.HOME_BTN_Z = 2;
CommonConstants.BORDER_RADIUS = 24;
CommonConstants.BORDER_RADIUS_DELETE = 12;
CommonConstants.TASK_WIDTH = '93.3%';
CommonConstants.COLUMN_SPACE = 16;
CommonConstants.TODO_DATA = [
    "吃一个苹果",
    "运动十分钟",
    "听一首歌",
    "给汤姆打电话",
    "找朋友聊聊天"
];
/**
 * Log tag.
 */
CommonConstants.RDB_TAG = '[Debug.Rdb]';
CommonConstants.TABLE_TAG = '[Debug.TaskTable]';
CommonConstants.INDEX_TAG = '[Debug.Index]';
/** task info table */
CommonConstants.TASK_INFO = {
    tableName: 'taskInfo',
    columns: [
        'id',
        'taskID',
        'createTime',
        'title',
        'content',
        'isDone',
    ]
};
// THOUSANDTH
CommonConstants.THOUSANDTH_15 = '1.5%'; // ‘1.5%’
CommonConstants.THOUSANDTH_12 = '2.2%'; // ‘2.2%’
CommonConstants.THOUSANDTH_33 = '3.3%'; // ‘3.3%’
CommonConstants.THOUSANDTH_50 = '5%'; // ‘5%’
CommonConstants.THOUSANDTH_66 = '6.6%'; // ‘6.6%’
CommonConstants.THOUSANDTH_80 = '8%'; // ‘8%’
CommonConstants.THOUSANDTH_100 = '10%'; // ‘10%’
CommonConstants.THOUSANDTH_120 = '12%'; // ‘12%’
CommonConstants.THOUSANDTH_160 = '16%'; // ‘16%’
CommonConstants.THOUSANDTH_400 = '40%'; // ‘40%’
CommonConstants.THOUSANDTH_420 = '42%'; // ‘42%’
CommonConstants.THOUSANDTH_500 = '50%'; // ‘50%’
CommonConstants.THOUSANDTH_560 = '56%'; // ‘56%’
CommonConstants.THOUSANDTH_750 = '75%'; // ‘75%’
CommonConstants.THOUSANDTH_800 = '80%'; // ‘80%’
CommonConstants.THOUSANDTH_830 = '83%'; // ‘83%’
CommonConstants.THOUSANDTH_880 = '88%'; // ‘88%’
CommonConstants.THOUSANDTH_900 = '90%'; // ‘90%’
CommonConstants.THOUSANDTH_940 = '94%'; // ‘90%’
CommonConstants.THOUSANDTH_1000 = '100%'; // ‘100%’
//# sourceMappingURL=CommonConstants.js.map