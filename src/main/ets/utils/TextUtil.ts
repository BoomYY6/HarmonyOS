//处理文本相关操作
//如果字符串为空或不是字符串类型，则返回 true；否则返回 false
export class TextUtils {
  static isEmpty(str: string): boolean {
    if (typeof str != 'string') {
      return true;
    }else {
      // !str 会检查字符串是否为 falsy 值（例如 '', null, undefined, 0, NaN, false）
      // str.trim().length === 0 会检查字符串在去除首尾空格后是否为空
      // 将这两个条件结合，如果字符串为空字符串或者去除空格后为空，则返回 true
      return !str || str.trim().length === 0;

    }
  }
}