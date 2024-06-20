import router from '@ohos:router';
import { StorageUtils } from '@bundle:com.example.account_app/entry/ets/utils/StorageUtils';
import { TextUtils } from '@bundle:com.example.account_app/entry/ets/utils/TextUtil';
import TaskInfo from '@bundle:com.example.account_app/entry/ets/viewmodel/TaskInfo';
import { addTask } from '@bundle:com.example.account_app/entry/ets/viewmodel/TaskViewModel';
class NewTaskPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__taskInfo = new ObservedPropertyObjectPU(new TaskInfo(0, 0, false, 0, '', ''), this, "taskInfo");
        this.__status = new ObservedPropertySimplePU('0', this, "status");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.taskInfo !== undefined) {
            this.taskInfo = params.taskInfo;
        }
        if (params.status !== undefined) {
            this.status = params.status;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__taskInfo.purgeDependencyOnElmtId(rmElmtId);
        this.__status.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__taskInfo.aboutToBeDeleted();
        this.__status.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get taskInfo() {
        return this.__taskInfo.get();
    }
    set taskInfo(newValue) {
        this.__taskInfo.set(newValue);
    }
    get status() {
        return this.__status.get();
    }
    set status(newValue) {
        this.__status.set(newValue);
    }
    aboutToAppear() {
        this.initAccPreference();
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
            Column.create();
            Column.height('100%');
            Column.padding(16);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: 10 });
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.status == "1" ? { "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777250, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }, { type: ButtonType.Capsule, stateEffect: true });
            Button.backgroundColor('#ff0be5dd');
            Button.height(30);
            Button.onClick(() => {
                router.back();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.layoutWeight(1);
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "1" ? { "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "1" ? { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777262, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ top: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.status == "1" ? { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } });
            TextInput.onChange((value) => {
                this.taskInfo.title = value;
            });
            TextInput.margin({ top: 5 });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "1" ? { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ top: 20 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextArea.create({ placeholder: this.status == "1" ? { "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } });
            TextArea.onChange((value) => {
                this.taskInfo.content = value;
            });
            TextArea.margin({ top: 5 });
            TextArea.height(200);
            if (!isInitialRender) {
                TextArea.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            //如果用户输入了标题，那么完成按钮再显示出来
            if (((_a = this.taskInfo) === null || _a === void 0 ? void 0 : _a.title.length) > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Button.createWithLabel(this.status == "1" ? { "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }, { type: ButtonType.Capsule, stateEffect: true });
                        Button.backgroundColor('#ff0be5dd');
                        Button.width('90%');
                        Button.height(50);
                        Button.onClick(() => {
                            this.addTask();
                        });
                        Button.margin({ top: 20 });
                        if (!isInitialRender) {
                            Button.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Button.pop();
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
    }
    //添加待办事项到数据库
    addTask() {
        this.taskInfo.createTime = new Date().getTime();
        this.taskInfo.taskID = new Date().getTime();
        addTask(this.taskInfo).then(() => {
            router.back();
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new NewTaskPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=NewTaskPage.js.map