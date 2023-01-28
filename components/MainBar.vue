
<template>
    <div class="glass_bar">

        <div class="d-flex flex-column flex-shrink-0 " style="width: 4.5rem;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none " title="" data-bs-toggle="tooltip"
                data-bs-placement="right" data-bs-original-title="スタート">
                <i class="bi bi-windows" style="font-size: 2.5rem; color: #009eff;"></i>
               
            </a>

            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">

                <li v-for="menu in menuList">
                    <a class='nav-link py-3  ' :class="{ 'active': menu.isActive === true }"
                        @click="menuClickFunc(menu.funcName)" data-bs-toggle="tooltip" data-bs-placement="right"
                        :title="menu.toolTipText">
                        <i :class="menu.iconClass" style="font-size: 1.5rem; color: #ffff;"></i>
                    </a>

                </li>

            </ul>
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
                'test': { iconClass: 'bi bi-cloud-download', isActive: false, funcName: 'saveEditorInfo' ,toolTipText:"エディター情報からデータをダウンロードします。" },
                'open': { iconClass: 'bi bi-cloud-arrow-up', isActive: false, funcName: 'openEditorInfo' ,toolTipText:"エディター情報からデータをアップロードします。"}
            }
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
                    state ={"nodes":[{"type":"DebugNode","id":"node_16749225893144","name":"DebugNode","options":[["ValueText",null]],"state":{},"interfaces":[["Probe",{"id":"ni_16749225893145","value":null}]],"position":{"x":763,"y":336},"width":200,"twoColumn":false,"customClasses":""},{"type":"DataCopyNode","id":"node_16749225934986","name":"DataCopy","options":[["ValueText",null],["ローカルファイルパス","234"],["アップロード先パス","2234"],["CHMOD","234"],["ファイル所有者名","234"]],"state":{},"interfaces":[["TASK",{"id":"ni_16749225934987","value":""}],["Task",{"id":"ni_16749225934988","value":null}]],"position":{"x":176,"y":335},"width":200,"twoColumn":false,"customClasses":""},{"type":"DataCopyNode","id":"node_16749227984417","name":"DataCopy","options":[["ValueText",null],["ローカルファイルパス","rw"],["アップロード先パス",null],["CHMOD",null],["ファイル所有者名",null]],"state":{},"interfaces":[["TASK",{"id":"ni_16749227984418","value":null}],["Task",{"id":"ni_16749227984419","value":null}]],"position":{"x":460,"y":361},"width":200,"twoColumn":false,"customClasses":""}],"connections":[{"id":"167492280422412","from":"ni_16749225934988","to":"ni_16749227984418"},{"id":"167492281949618","from":"ni_16749227984419","to":"ni_16749225893145"}],"panning":{"x":0,"y":0},"scaling":1}
                    this.editor.load(state);
                    break

                default:
                    console.log('INVALID EVENT!!!')
            }
        }
    }
};
</script>