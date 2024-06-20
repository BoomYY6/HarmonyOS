import CommonConstants from '@bundle:com.example.account_app/entry/ets/common/constants/CommonConstants';
const CHINESE_OF_WEEK = ['一', '二', '三', '四', '五', '六', '日'];
const YEAR = '年';
const MONTH = '月';
const DAY = '日';
const WEEK = '星期';
const DAYS_OF_WEEK = 7;
const SUNDAY_FIRST_SHIFT = 6;
export const weekTitleFunc = () => {
    const weekTitleArr = [];
    for (let index = 0; index < CHINESE_OF_WEEK.length; index++) {
        weekTitleArr.push(CHINESE_OF_WEEK[(index + SUNDAY_FIRST_SHIFT) % DAYS_OF_WEEK]); // Sunday is the first day
    }
    return weekTitleArr;
};
export const WEEK_TITLES = weekTitleFunc();
// one digit or two number convert into two digit time format
export function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
export function dateFormat(date) {
    return date.getFullYear() + YEAR + padTo2Digits(date.getMonth() + 1) + MONTH + padTo2Digits(date.getDate()) + DAY;
}
// date convert into format of 'Fri Aug 26 2022'
export function dateToStr(date) {
    return date.toDateString();
}
export function weekDateFormat(timestamp) {
    let tempDate = new Date(timestamp);
    return dateFormat(tempDate) + WEEK + WEEK_TITLES[tempDate.getDay()];
}
//根据时间戳转换为年月日-时分秒的时间
export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    // 获取日期的年、月、日
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    // 获取时间的小时、分钟
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // 获取当前日期的年、月、日
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDay = now.getDate();
    if (year === nowYear && month === nowMonth && day === nowDay) {
        // 今天的情况
        return `今天 ${hours}:${minutes.toString().padStart(2, '0')}`;
    }
    else if (year === nowYear &&
        month === nowMonth &&
        day === nowDay - 1) {
        // 昨天的情况
        return `昨天 ${hours}:${minutes.toString().padStart(2, '0')}`;
    }
    else {
        // 其他日期的情况
        return `${month}-${day}`;
    }
}
//是否属于同一天
export function sameDate(firstDate, timestamp) {
    let secondDate = new Date(timestamp);
    if (firstDate.getFullYear() != secondDate.getFullYear()) {
        return false;
    }
    if (firstDate.getMonth() != secondDate.getMonth()) {
        return false;
    }
    if (firstDate.getDate() != secondDate.getDate()) {
        return false;
    }
    return true;
}
export function ratio2percent(ratio) {
    return `${ratio * 100}%`;
}
export const oneWeekDictFunc = () => {
    const oneWeekDict = [];
    for (let index = 0; index < CHINESE_OF_WEEK.length; index++) {
        oneWeekDict[index] = `${WEEK}${CHINESE_OF_WEEK[index]}`;
    }
    return oneWeekDict;
};
export function getTextByFontSize(fontSize) {
    let fontSizeText = '';
    switch (fontSize) {
        case CommonConstants.SET_SIZE_SMALL:
            fontSizeText = "小";
            break;
        case CommonConstants.SET_SIZE_NORMAL:
            fontSizeText = "标准";
            break;
        case CommonConstants.SET_SIZE_LARGE:
            fontSizeText = "大";
            break;
        case CommonConstants.SET_SIZE_EXTRA_LARGE:
            fontSizeText = "超大";
            break;
        case CommonConstants.SET_SIZE_HUGE:
            fontSizeText = "特大";
            break;
        default:
            fontSizeText = "标准";
    }
    return fontSizeText;
}
//# sourceMappingURL=Utils.js.map