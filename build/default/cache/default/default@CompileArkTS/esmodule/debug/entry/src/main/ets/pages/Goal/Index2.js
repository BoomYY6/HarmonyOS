import CommonConstant from '@bundle:com.example.account_app/entry/ets/common/constants/CommonConstants';
import { deleteTask, getAllTask } from '@bundle:com.example.account_app/entry/ets/viewmodel/TaskViewModel';
import TaskView from '@bundle:com.example.account_app/entry/ets/view/TaskView';
import AddBtn from '@bundle:com.example.account_app/entry/ets/view/AddBtnComponent';
import router from '@ohos:router';
import PreferencesUtil from '@bundle:com.example.account_app/entry/ets/common/database/PreferencesUtil';
import Logger from '@bundle:com.example.account_app/entry/ets/common/utils/Logger';
import { StorageUtils } from '@bundle:com.example.account_app/entry/ets/utils/StorageUtils';
import { TextUtils } from '@bundle:com.example.account_app/entry/ets/utils/TextUtil';
const TAG = '[IndexMain]';
export class Index2 extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__todoTask = new ObservedPropertyObjectPU(null, this, "todoTask");
        this.taskId = 0;
        this.__changeFontSize = new ObservedPropertySimplePU(1, this, "changeFontSize");
        this.__status = new ObservedPropertySimplePU('0', this, "status");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.todoTask !== undefined) {
            this.todoTask = params.todoTask;
        }
        if (params.taskId !== undefined) {
            this.taskId = params.taskId;
        }
        if (params.changeFontSize !== undefined) {
            this.changeFontSize = params.changeFontSize;
        }
        if (params.status !== undefined) {
            this.status = params.status;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__todoTask.purgeDependencyOnElmtId(rmElmtId);
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__status.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__todoTask.aboutToBeDeleted();
        this.__changeFontSize.aboutToBeDeleted();
        this.__status.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get todoTask() {
        return this.__todoTask.get();
    }
    set todoTask(newValue) {
        this.__todoTask.set(newValue);
    }
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue) {
        this.__changeFontSize.set(newValue);
    }
    get status() {
        return this.__status.get();
    }
    set status(newValue) {
        this.__status.set(newValue);
    }
    aboutToAppear() {
        this.refreshTaskList();
        this.initAccPreference();
    }
    onPageShow() {
        this.refreshTaskList();
        //从Preferences里面读取保存的字体大小
        PreferencesUtil.getChangeFontSize().then((value) => {
            this.changeFontSize = value;
            Logger.info(TAG, 'Get the value of changeFontSize: ' + this.changeFontSize);
        });
    }
    //从数据库获取最新的代办列表数据
    refreshTaskList() {
        getAllTask().then((res) => {
            this.todoTask = res;
        });
    }
    async initAccPreference() {
        if (!TextUtils.isEmpty(await this.getAccPreference())) {
            var s = await this.getAccPreference();
            let data = JSON.parse(s);
            this.status = data;
        }
    }
    async getAccPreference() {
        let theme = '';
        theme = await StorageUtils.get('language');
        return theme;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstant.COLUMN_SPACE });
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor("#FFFFFF");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.padding({ left: 15, right: 15, top: 16 });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(" ");
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("日记");
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "0" ? { "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.fontSize(12);
            Text.fontColor(Color.Red);
            Text.onClick(() => {
                // StorageUtils.clear()
                router.replaceUrl({ url: 'pages/Mine/denglu' });
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            //如果代办的数据数量大于0，那么显示列表，否则显示空页面
            if (((_a = this.todoTask) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        List.create({ space: CommonConstant.COLUMN_SPACE });
                        List.width('100%');
                        List.layoutWeight(1);
                        if (!isInitialRender) {
                            List.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                const isLazyCreate = true;
                                const itemCreation = (elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    ListItem.create(deepRenderFunction, isLazyCreate);
                                    if (!isInitialRender) {
                                        ListItem.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                };
                                const observedShallowRender = () => {
                                    this.observeComponentCreation(itemCreation);
                                    ListItem.pop();
                                };
                                const observedDeepRender = () => {
                                    this.observeComponentCreation(itemCreation);
                                    {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            if (isInitialRender) {
                                                ViewPU.create(new TaskView(this, {
                                                    changeFontSize: this.__changeFontSize,
                                                    taskInfo: item,
                                                    editTaskClick: () => {
                                                        this.editTaskAction(item);
                                                    },
                                                    onLongTaskClick: () => {
                                                        this.deleteTask(item);
                                                    }
                                                }, undefined, elmtId));
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    }
                                    ListItem.pop();
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    this.updateFuncByElmtId.set(elmtId, itemCreation);
                                    {
                                        this.observeComponentCreation((elmtId, isInitialRender) => {
                                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                            if (isInitialRender) {
                                                ViewPU.create(new TaskView(this, {
                                                    changeFontSize: this.__changeFontSize,
                                                    taskInfo: item,
                                                    editTaskClick: () => {
                                                        this.editTaskAction(item);
                                                    },
                                                    onLongTaskClick: () => {
                                                        this.deleteTask(item);
                                                    }
                                                }, undefined, elmtId));
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                            ViewStackProcessor.StopGetAccessRecording();
                                        });
                                    }
                                    ListItem.pop();
                                };
                                if (isLazyCreate) {
                                    observedShallowRender();
                                }
                                else {
                                    observedDeepRender();
                                }
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.todoTask, forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
                        if (!isInitialRender) {
                            ForEach.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new AddBtn(this, { clickAction: () => {
                            this.newTaskAction();
                        } }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Stack.pop();
    }
    //删除待办事项
    deleteTask(taskInfo) {
        AlertDialog.show({
            title: '删除记录',
            message: '是否需要删除该记录?',
            autoCancel: false,
            alignment: DialogAlignment.Bottom,
            offset: { dx: 0, dy: -20 },
            primaryButton: {
                value: '取消',
                action: () => {
                    console.info('Callback when the first button is clicked');
                }
            },
            secondaryButton: {
                value: '删除',
                fontColor: '#D94838',
                action: () => {
                    deleteTask(taskInfo).then(() => {
                        this.refreshTaskList();
                    });
                }
            },
            cancel: () => {
                console.info('Closed callbacks');
            }
        });
    }
    //跳转新建待办事项页面
    newTaskAction() {
        router.pushUrl({ url: 'pages/Goal/NewTaskPage' });
    }
    //编辑待办事项，跳转编辑页面
    editTaskAction(taskInfo) {
        router.pushUrl({ url: 'pages/Goal/EditTaskPage', params: taskInfo });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index2(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index2.js.map