
<template>
    <div class="glass_bar">
        <div class="d-flex flex-column flex-shrink-0 " style="width: 4.5rem;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none " title="" data-bs-toggle="tooltip"
                data-bs-placement="right" data-bs-original-title="スタート">
                <i class="bi bi-windows" style="font-size: 2.5rem; color: #009eff;"></i>

            </a>
            <div class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li v-for="menu in menuList">
                    <a class='nav-link py-3  ' :class="{ 'active': menu.isActive === true }"
                        @click="menuClickFunc(menu.funcName)" data-bs-toggle="tooltip" data-bs-placement="right"
                        :title="menu.toolTipText">
                        <i :class="menu.iconClass" style="font-size: 1.5rem; color: #ffff;"></i>
                    </a>
                </li>
            </div>
            <div class="dropdown border-top">
                <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none "
                    id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="@/assets/image/avater.png" alt="mdo" width="45" height="45"
                        style="background-color: white;" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small shadow " aria-labelledby="dropdownUser3">
                    <li><a class="dropdown-item" href="#">プロフィール編集</a></li>
                    <li><a class="dropdown-item" href="#">設定</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">ログアウト</a></li>
                </ul>
            </div>
        </div>
        <v-dialog dark persistent scrollable v-model="dialog" width="700">
            <v-card>
                <v-card-title class="text-h5 blue ">
                    ファイル
                </v-card-title>  <v-subheader>ファイル送信用</v-subheader>
                <v-card-text style="height: 100%;">
                    <v-list subheader two-line flat>
                      

                        <v-list-item-group v-model="settings" multiple>
                            <v-list-item>
                                <template v-slot:default="{ active, }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Notifications</v-list-item-title>
                                        <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>

                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Sound</v-list-item-title>
                                        <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>

                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Video sounds</v-list-item-title>
                                        <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>

                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:default="{ active }">
                                    <v-list-item-action>
                                        <v-checkbox :input-value="active" color="primary"></v-checkbox>
                                    </v-list-item-action>

                                    <v-list-item-content>
                                        <v-list-item-title>Invites</v-list-item-title>
                                        <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                                    </v-list-item-content>
                                </template>
                            </v-list-item>
                        </v-list-item-group>

                    </v-list></v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false; menuList.openFileManager.isActive = false;">
                        閉じる
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.nav-link:hover {
    background-color: #3598c2;
}

.nav-link.active {
    background-color: #174051;
}


.target {
    color: red;
    border-bottom: 1px solid currentColor;
    /* color で指定している色が適応される */
}

.glass_bar {

    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    /* padding: 1rem;   nav太くする用 */
    color: white;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>

<script>
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'
export default {
    name: "MainBar",
    model: {
        prop: "editor",
        event: "change",
    },
    props: {
        editor: {
            type: Object
        }
    },
    computed: {
        applyEditor: {
            get() {
                return this.editor;
            },
            set(newValue) {
                this.$emit("change", newValue);
            },
        },
    },

    data() {
        return {
            menuList: {
                'test': { iconClass: 'bi bi-cloud-download', isActive: false, funcName: 'saveEditorInfo', toolTipText: "エディター情報からデータをダウンロードします。" },
                'open': { iconClass: 'bi bi-cloud-arrow-up', isActive: false, funcName: 'openEditorInfo', toolTipText: "エディター情報からデータをアップロードします。" },
                'openFileManager': { iconClass: 'bi bi-card-list', isActive: false, funcName: 'openFileManager', toolTipText: "ファイルマネージャーを表示します。" }
            },
            dialog: false,
        }
    },

    mounted() {
        //inti tooltip
        Array.from(document.querySelectorAll('a[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    },

    methods: {
        menuClickFunc(event) {
            switch (event) {
                //SaveEvent発火
                case 'saveEditorInfo':
                    let state = JSON.stringify(this.editor.save());
                    console.log(state);
                    this.menuList.test.isActive = true;
                    break
                case 'openEditorInfo':
                    state = { "nodes": [{ "type": "DataCopyNode", "id": "node_16749225934986", "name": "DataCopy", "options": [["ValueText", null], ["ローカルファイルパス", "/tmp/sample.txt"], ["アップロード先パス", "/tmp"], ["CHMOD", "775"], ["ファイル所有者名", "xiaotian"]], "state": {}, "interfaces": [["TASK(IN)", { "id": "ni_167492793152321", "value": "" }], ["TASK(OUT)", { "id": "ni_167492793152322", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }] }]], "position": { "x": 176, "y": 335 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "DataCopyNode", "id": "node_16749227984417", "name": "DataCopy", "options": [["ValueText", null], ["ローカルファイルパス", "/tmp/sample.txt2"], ["アップロード先パス", "/tmp"], ["CHMOD", "777"], ["ファイル所有者名", "xiaotian2"]], "state": {}, "interfaces": [["TASK(IN)", { "id": "ni_167492793152324", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }] }], ["TASK(OUT)", { "id": "ni_167492793152325", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] }]], "position": { "x": 460, "y": 361 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "PlayNode", "id": "node_167492675870814", "name": "PlayRuleSetting", "options": [["Play名", null], ["ユーザー切替有効", null], ["実行ユーザー名", null], ["ホスト群", null]], "state": {}, "interfaces": [["PLAY(IN)", { "id": "ni_167492675870815", "value": "" }], ["TASK(IN)", { "id": "ni_167492675870816", "value": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] }], ["PLAY(OUT)", { "id": "ni_167492675870817", "value": [{ "Type": "PLAY", "DataType": "PlayRule", "Param": { "PlayName": null, "UserBecome": null, "BecomeUserName": null, "Tasks": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] } }] }]], "position": { "x": 805, "y": 355 }, "width": 200, "twoColumn": false, "customClasses": "" }, { "type": "ExecNode", "id": "node_167496063373618", "name": "ExecNode", "options": [["OUT-MSG", "PLAY(IN)を実行"]], "state": {}, "interfaces": [["PLAY(IN)", { "id": "ni_167496063373619", "value": [{ "Type": "PLAY", "DataType": "PlayRule", "Param": { "PlayName": null, "UserBecome": null, "BecomeUserName": null, "Tasks": [{ "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt", "UploadFilePath": "/tmp", "Permission": "775", "Owner": "xiaotian" } }, { "Type": "TASK", "DataType": "DataCopy", "Param": { "LocalFilePath": "/tmp/sample.txt2", "UploadFilePath": "/tmp", "Permission": "777", "Owner": "xiaotian2" } }] } }] }]], "position": { "x": 1051, "y": 347 }, "width": 200, "twoColumn": false, "customClasses": "" }], "connections": [{ "id": "167492793484436", "from": "ni_167492793152322", "to": "ni_167492793152324" }, { "id": "167492793725639", "from": "ni_167492793152325", "to": "ni_167492675870816" }, { "id": "167496063600522", "from": "ni_167492675870817", "to": "ni_167496063373619" }], "panning": { "x": -59, "y": -41 }, "scaling": 1 }
                    this.editor.load(state);
                    break
                case 'openFileManager':
                    if (!this.menuList.openFileManager.isActive) {
                        this.dialog = true;

                        this.menuList.openFileManager.isActive = true;
                    } else {
                        this.dialog = true;
                        this.menuList.openFileManager.isActive = false;
                    }
                    break

                default:
                    console.log('INVALID EVENT!!!')
            }
        },
    }
};
</script>