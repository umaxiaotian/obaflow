
<template>
    <div class="glass_bar">
        <div class="d-flex flex-column flex-shrink-0 " style="width: 4.5rem;">
            <a href="/" class="d-block p-3 link-dark text-decoration-none " title="" data-bs-toggle="tooltip"
                data-bs-placement="right" data-bs-original-title="Icon-only">
                <i class="bi bi-windows" style="font-size: 2.5rem; color: #009eff;"></i>
                <span class="visually-hidden">Icon-only</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li v-for="menu in menuList">
                    <div class='nav-link py-3 mb-1 ' :class="{ 'active': menu.isActive === true }"
                        @click="menuClickFunc(menu.funcName)" style="border: 1px solid rgba(255, 255, 255, 0.5);"
                        title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i :class="menu.iconClass" style="font-size: 1.5rem; color: #ffff;"></i>
                    </div>
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
export default {
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
                'test': { iconClass: 'bi bi-apple', isActive: false, funcName: 'saveEditorInfo' },
                'open': { iconClass: 'bi bi-apple', isActive: false, funcName: 'openEditorInfo' }
            }
        }
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
                    state={"nodes":[{"type":"DataCopyNode","id":"node_16743213464480","name":"DataCopyNode","options":[["ValueText",""],["ローカルファイルパス",null],["アップロード先パス",null],["CHMOD",null],["ファイル所有者名",null]],"state":{},"interfaces":[["Play",{"id":"ni_16743213464481","value":""}]],"position":{"x":560,"y":312},"width":200,"twoColumn":false,"customClasses":""},{"type":"PlayNode","id":"node_16743213647492","name":"Play","options":[["Play名",null],["ユーザー切替有効",null],["実行ユーザー名",null],["ホスト群",null]],"state":{},"interfaces":[["Task",{"id":"ni_16743213647493","value":null}]],"position":{"x":247,"y":323},"width":200,"twoColumn":false,"customClasses":""}],"connections":[],"panning":{"x":0,"y":0},"scaling":1};
                    this.editor.load(state);
                    break

                default:
                    console.log('INVALID EVENT!!!')
            }
        }
    }
};
</script>