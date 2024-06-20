export var AccountExpensesType;
(function (AccountExpensesType) {
    AccountExpensesType[AccountExpensesType["MEALS"] = 0] = "MEALS";
    AccountExpensesType[AccountExpensesType["MEDICAL"] = 1] = "MEDICAL";
    AccountExpensesType[AccountExpensesType["TRANSPORT"] = 2] = "TRANSPORT";
    AccountExpensesType[AccountExpensesType["HOUSE"] = 3] = "HOUSE";
    AccountExpensesType[AccountExpensesType["SOCIAL"] = 4] = "SOCIAL";
    AccountExpensesType[AccountExpensesType["SHOPPING"] = 5] = "SHOPPING";
    AccountExpensesType[AccountExpensesType["ENTERTAINMENT"] = 6] = "ENTERTAINMENT";
    AccountExpensesType[AccountExpensesType["OTHER"] = 7] = "OTHER";
})(AccountExpensesType || (AccountExpensesType = {}));
export var AccountIncomeType;
(function (AccountIncomeType) {
    AccountIncomeType[AccountIncomeType["STUDY1"] = 0] = "STUDY1";
    AccountIncomeType[AccountIncomeType["STUDY2"] = 1] = "STUDY2";
    AccountIncomeType[AccountIncomeType["STUDY3"] = 2] = "STUDY3";
    AccountIncomeType[AccountIncomeType["STUDY"] = 3] = "STUDY";
    AccountIncomeType[AccountIncomeType["OTHER"] = 4] = "OTHER";
})(AccountIncomeType || (AccountIncomeType = {}));
export var AccountType;
(function (AccountType) {
    AccountType[AccountType["EXPENSES"] = 0] = "EXPENSES";
    AccountType[AccountType["INCOME"] = 1] = "INCOME";
})(AccountType || (AccountType = {}));
// 数据库映射字段
export var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["LONG"] = 0] = "LONG";
    ColumnType[ColumnType["DOUBLE"] = 1] = "DOUBLE";
    ColumnType[ColumnType["STRING"] = 2] = "STRING";
    ColumnType[ColumnType["BLOB"] = 3] = "BLOB";
})(ColumnType || (ColumnType = {}));
//# sourceMappingURL=account.js.map