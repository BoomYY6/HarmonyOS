import router from '@ohos:router';
import { StorageUtils } from '@bundle:com.example.account_app/entry/ets/utils/StorageUtils';
import { TextUtils } from '@bundle:com.example.account_app/entry/ets/utils/TextUtil';
import { updateTask } from '@bundle:com.example.account_app/entry/ets/viewmodel/TaskViewModel';
class EditTaskPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__taskInfo = new ObservedPropertyObjectPU(null, this, "taskInfo");
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
        this.taskInfo = router.getParams();
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
            Text.create(this.status == "1" ? { "id": 16777255, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "1" ? { "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : '标题');
            Text.fontSize(20);
            Text.margin({ top: 20 });
            Text.width('100%');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.status == "1" ? { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777258, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }, text: (_a = this.taskInfo) === null || _a === void 0 ? void 0 : _a.title });
            TextInput.onChange((value) => {
                this.taskInfo.title = value;
            });
            TextInput.margin({ top: 10 });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == "1" ? { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.margin({ top: 20 });
            Text.width('100%');
            Text.fontSize(20);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextArea.create({ placeholder: this.status == "1" ? { "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }, text: (_a = this.taskInfo) === null || _a === void 0 ? void 0 : _a.content });
            TextArea.onChange((value) => {
                this.taskInfo.content = value;
            });
            TextArea.margin({ top: 10 });
            TextArea.height(200);
            if (!isInitialRender) {
                TextArea.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.status == "1" ? { "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : '保存', { type: ButtonType.Capsule, stateEffect: true });
            Button.backgroundColor('#ff0be5dd');
            Button.width('90%');
            Button.height(50);
            Button.onClick(() => {
                this.updateTask();
            });
            Button.margin({ top: 20 });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    //更新待办事项到数据库
    updateTask() {
        this.taskInfo.createTime = new Date().getTime();
        updateTask(this.taskInfo).then(() => {
            router.back();
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new EditTaskPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=EditTaskPage.js.map