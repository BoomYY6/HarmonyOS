import router from '@ohos:router';
import prompt from '@ohos:prompt';
import { StorageUtils } from '@bundle:com.example.account_app/entry/ets/utils/StorageUtils';
import { TextUtils } from '@bundle:com.example.account_app/entry/ets/utils/TextUtil';
import showToast from '@bundle:com.example.account_app/entry/ets/utils/ToastUtils';
export class zhuce extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU("", this, "message");
        this.__mima1 = new ObservedPropertySimplePU("", this, "mima1");
        this.__mima2 = new ObservedPropertySimplePU("", this, "mima2");
        this.__status = new ObservedPropertySimplePU('0', this, "status");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.mima1 !== undefined) {
            this.mima1 = params.mima1;
        }
        if (params.mima2 !== undefined) {
            this.mima2 = params.mima2;
        }
        if (params.status !== undefined) {
            this.status = params.status;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__mima1.purgeDependencyOnElmtId(rmElmtId);
        this.__mima2.purgeDependencyOnElmtId(rmElmtId);
        this.__status.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__mima1.aboutToBeDeleted();
        this.__mima2.aboutToBeDeleted();
        this.__status.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get mima1() {
        return this.__mima1.get();
    }
    set mima1(newValue) {
        this.__mima1.set(newValue);
    }
    get mima2() {
        return this.__mima2.get();
    }
    set mima2(newValue) {
        this.__mima2.set(newValue);
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
            Column.width('100%');
            Column.margin({ bottom: 20 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({ bottom: 20 });
            Column.height('20%');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.status == '0' ? { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.fontColor('#ff13e3c5');
            Text.fontSize(24);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width("100%");
            Column.height("30%");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 用户名输入框
            TextInput.create({ placeholder: this.status == "0" ? { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } });
            // 用户名输入框
            TextInput.type(InputType.Normal);
            // 用户名输入框
            TextInput.width('80%');
            // 用户名输入框
            TextInput.height(55);
            // 用户名输入框
            TextInput.placeholderColor(Color.Black);
            // 用户名输入框
            TextInput.backgroundColor('#ffd2d7d2');
            // 用户名输入框
            TextInput.borderRadius(13);
            // 用户名输入框
            TextInput.margin({ bottom: 12 });
            // 用户名输入框
            TextInput.onChange((value) => {
                this.message = value;
            });
            if (!isInitialRender) {
                // 用户名输入框
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.status == "0" ? { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } });
            TextInput.type(InputType.Password);
            TextInput.width('80%');
            TextInput.height(55);
            TextInput.placeholderColor(Color.Black);
            TextInput.backgroundColor('#ffd2d7d2');
            TextInput.borderRadius(13);
            TextInput.margin({ bottom: 12 });
            TextInput.onChange((value) => {
                this.mima1 = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.status == "0" ? '再次输入密码' : { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } });
            TextInput.type(InputType.Password);
            TextInput.width('80%');
            TextInput.height(55);
            TextInput.placeholderColor(Color.Black);
            TextInput.backgroundColor('#ffd2d7d2');
            TextInput.borderRadius(13);
            TextInput.margin({ bottom: 12 });
            TextInput.onChange((value) => {
                this.mima2 = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.SpaceEvenly);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //登录按钮
            Button.createWithLabel(this.status == '0' ? { "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            //登录按钮
            Button.margin({ bottom: 50 });
            //登录按钮
            Button.width(120);
            //登录按钮
            Button.height(40);
            //登录按钮
            Button.fontColor(Color.White);
            //登录按钮
            Button.onClick(() => {
                if (this.message == '' && this.mima1 == '' && this.mima2 == '') {
                    showToast(this.status == "0" ? { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
                }
                else {
                    if (this.mima1 == this.mima2) {
                        StorageUtils.put("acc", this.message);
                        StorageUtils.put("pwd", this.mima1);
                        prompt.showToast({
                            message: 'success！',
                            duration: 2000,
                        });
                        router.back({
                            url: 'pages/Mine/denglu',
                        });
                    }
                    else {
                        showToast(this.status == "0" ? { "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
                    }
                }
            });
            //登录按钮
            Button.backgroundColor('#ff13e3c5');
            //登录按钮
            Button.width('80%');
            //登录按钮
            Button.borderStyle(BorderStyle.Dotted);
            if (!isInitialRender) {
                //登录按钮
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //登录按钮
        Button.pop();
        Row.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new zhuce(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=zhuce.js.map