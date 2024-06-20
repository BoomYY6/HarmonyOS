
/**
 * Column Info.
 *
 */
export default class ColumnInfo {
  name: string;   //列名
  type: string;    //数据类型
  length?: number;   //数据长度
  nullable?: boolean;  //是否允许为空
  primary?: boolean;   //是否为主键
  autoincrement?: boolean;   //是否为自增列

  constructor(name: string, type: string, length?: number, nullable?: boolean,
              primary?: boolean, autoincrement?: boolean) {
    this.name = name;
    this.type = type;
    this.primary = primary;
    this.length = length;
    this.nullable = nullable;
    this.autoincrement = autoincrement;
  }
}


