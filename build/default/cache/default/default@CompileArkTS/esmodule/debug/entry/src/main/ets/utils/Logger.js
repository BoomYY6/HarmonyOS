import hilog from '@ohos:hilog';
export class Logger {
    static formatLogs(args) {
        const logs = args.map(arg => {
            if (typeof arg === 'object') { //如果参数为对象，则转化为JSON字符串
                return JSON.stringify(arg);
            }
            return arg.toString();
        });
        return logs;
    }
    //记录不同级别的日志，包括日志域、日志前缀、格式字符串和格式化后的参数列表
    static debug(...args) {
        hilog.debug(Logger.domain, Logger.prefix, Array(args.length).fill(Logger.format).join(', '), Logger.formatLogs(args));
    }
    static info(...args) {
        hilog.info(Logger.domain, Logger.prefix, Array(args.length).fill(Logger.format).join(', '), Logger.formatLogs(args));
    }
    static warn(...args) {
        hilog.warn(Logger.domain, Logger.prefix, Array(args.length).fill(Logger.format).join(', '), Logger.formatLogs(args));
    }
    static error(...args) {
        hilog.error(Logger.domain, Logger.prefix, Array(args.length).fill(Logger.format).join(', '), Logger.formatLogs(args));
    }
}
Logger.domain = 0xFF00; //日志的域标识符
Logger.prefix = '[account-app]'; //日志的前缀
Logger.format = '%{public}s'; //格式化字符串
//# sourceMappingURL=Logger.js.map