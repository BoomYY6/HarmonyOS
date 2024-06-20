import router from '@ohos:router';
import { StorageUtils } from '@bundle:com.example.account_app/entry/ets/utils/StorageUtils';
import { TextUtils } from '@bundle:com.example.account_app/entry/ets/utils/TextUtil';
import showToast from '@bundle:com.example.account_app/entry/ets/utils/ToastUtils';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__switchLanguage = new ObservedPropertySimplePU(0 //0 中文 1英语
        , this, "switchLanguage");
        this.__muser = new ObservedPropertySimplePU("", this, "muser");
        this.__mpassword = new ObservedPropertySimplePU("", this, "mpassword");
        this.__save_acc = new ObservedPropertySimplePU('', this, "save_acc");
        this.__save_psw = new ObservedPropertySimplePU('', this, "save_psw");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.switchLanguage !== undefined) {
            this.switchLanguage = params.switchLanguage;
        }
        if (params.muser !== undefined) {
            this.muser = params.muser;
        }
        if (params.mpassword !== undefined) {
            this.mpassword = params.mpassword;
        }
        if (params.save_acc !== undefined) {
            this.save_acc = params.save_acc;
        }
        if (params.save_psw !== undefined) {
            this.save_psw = params.save_psw;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__switchLanguage.purgeDependencyOnElmtId(rmElmtId);
        this.__muser.purgeDependencyOnElmtId(rmElmtId);
        this.__mpassword.purgeDependencyOnElmtId(rmElmtId);
        this.__save_acc.purgeDependencyOnElmtId(rmElmtId);
        this.__save_psw.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__switchLanguage.aboutToBeDeleted();
        this.__muser.aboutToBeDeleted();
        this.__mpassword.aboutToBeDeleted();
        this.__save_acc.aboutToBeDeleted();
        this.__save_psw.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get switchLanguage() {
        return this.__switchLanguage.get();
    }
    set switchLanguage(newValue) {
        this.__switchLanguage.set(newValue);
    }
    get muser() {
        return this.__muser.get();
    }
    set muser(newValue) {
        this.__muser.set(newValue);
    }
    get mpassword() {
        return this.__mpassword.get();
    }
    set mpassword(newValue) {
        this.__mpassword.set(newValue);
    }
    get save_acc() {
        return this.__save_acc.get();
    }
    set save_acc(newValue) {
        this.__save_acc.set(newValue);
    }
    get save_psw() {
        return this.__save_psw.get();
    }
    set save_psw(newValue) {
        this.__save_psw.set(newValue);
    }
    async initAccPreference() {
        if (!TextUtils.isEmpty(await this.getAccPreference())) {
            var s = await this.getAccPreference();
            let data = JSON.parse(s);
            this.save_acc = data;
            console.log("userInfo_acc" + data);
        }
    }
    async aboutToAppear() {
        await this.initAccPreference();
        await this.initPswPreference();
    }
    async onPageShow() {
        await this.initAccPreference();
        await this.initPswPreference();
    }
    async initPswPreference() {
        if (!TextUtils.isEmpty(await this.getPswPreference())) {
            var s = await this.getPswPreference();
            let data = JSON.parse(s);
            this.save_psw = data;
            console.log("userInfo_psw" + data);
        }
    }
    async getAccPreference() {
        let theme = '';
        theme = await StorageUtils.get('acc');
        return theme;
    }
    async getPswPreference() {
        let theme = '';
        theme = await StorageUtils.get('pwd');
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
            Column.height('30%');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.switchLanguage == 0 ? { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Text.fontColor('#ff04d6f3');
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
            TextInput.create({
                placeholder: this.switchLanguage == 0 ? "请输入账户" : { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }
            });
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
                this.muser = value;
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
            TextInput.create({
                placeholder: this.switchLanguage == 0 ? { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" }
            });
            TextInput.type(InputType.Password);
            TextInput.width('80%');
            TextInput.height(55);
            TextInput.placeholderColor(Color.Black);
            TextInput.backgroundColor('#ffd2d7d2');
            TextInput.borderRadius(13);
            TextInput.onChange((value) => {
                this.mpassword = value;
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
            Row.margin({ top: 10 });
            Row.justifyContent(FlexAlign.End);
            Row.width('80%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Select.create([{ value: '中文简体', icon: { "id": 16777284, "type": 20000, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } },
                { value: 'English', icon: { "id": 16777285, "type": 20000, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } }
            ]);
            Select.selected(2);
            Select.value('中文简体');
            Select.font({ size: 16, weight: 500 });
            Select.fontColor('#182431');
            Select.selectedOptionFont({ size: 16, weight: 400 });
            Select.optionFont({ size: 16, weight: 400 });
            Select.onSelect((index) => {
                if (index == 0) {
                    this.switchLanguage = 0;
                    StorageUtils.put("language", "0");
                }
                if (index == 1) {
                    this.switchLanguage = 1;
                    StorageUtils.put("language", "1");
                }
            });
            Select.height(40);
            if (!isInitialRender) {
                Select.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Select.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({ top: 20 });
            Column.justifyContent(FlexAlign.SpaceEvenly);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.switchLanguage == 0 ? { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Button.width(220);
            Button.height(40);
            Button.fontColor(Color.White);
            Button.onClick(() => {
                if (this.muser == '' && this.mpassword == '') {
                    showToast(this.switchLanguage == 0 ? { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
                }
                else {
                    if (this.muser == this.save_acc && this.mpassword == this.save_psw) {
                        router.replaceUrl({
                            url: "pages/Goal/Index2"
                        });
                    }
                    else {
                        showToast(this.switchLanguage == 0 ? { "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
                    }
                }
            });
            Button.backgroundColor('#ff13e3c5');
            Button.borderStyle(BorderStyle.Dotted);
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.switchLanguage == 0 ? { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
            Button.width(220);
            Button.height(40);
            Button.fontColor(Color.White);
            Button.onClick(() => {
                if (this.save_acc != "" && this.save_psw != "") {
                    showToast(this.switchLanguage == 0 ? { "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" } : { "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.account_app", "moduleName": "entry" });
                }
                else {
                    router.pushUrl({
                        url: "pages/Mine/zhuce"
                    });
                }
            });
            Button.margin({ top: 20 });
            Button.backgroundColor('#ff0be5dd');
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=denglu.js.map