<template>
  <div style="width:100vw;height:100vh">
    <MainBar v-model="editor"/>
    <hint-overlay />
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
  </div>
</template>

<script>
import { Editor } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { PlayNode, ButtonNode, CopyTaskNode, DebugNode } from '@/components/NodeComponents'
import { useWinBox } from 'vue-winbox'
import ButtonOption from "@/components/ButtonOption.vue";
import MainBar from "@/components/MainBar";
import HintOverlay from "@/components/HintOverlay.vue";

export default {
  components: { HintOverlay, MainBar },
  data() {
    return {
      editor: new Editor(),
      viewPlugin: new ViewPlugin(),
      engine: new Engine(true),
      intfTypePlugin: new InterfaceTypePlugin(),
      options: {
        title: 'テストウィンドウ',
      }
    }
  },
  created() {
    this.editor.use(this.viewPlugin);
    this.editor.use(this.engine);
    this.editor.use(new OptionPlugin())
    this.editor.use(this.intfTypePlugin)
    this.viewPlugin.enableMinimap = true;
    this.viewPlugin.registerOption("ButtonOption", ButtonOption);

    // Nodeエディタへ登録
    this.editor.registerNodeType("ButtonNode", ButtonNode, 'Custom')
    this.editor.registerNodeType("PlayNode", PlayNode, 'Play')
    this.editor.registerNodeType("CopyTask", CopyTaskNode, 'Tasks')
    this.editor.registerNodeType("DebugNode", DebugNode);

    // 接続チェック
    this.intfTypePlugin
      .addType("number", "cyan")
      .addType("string", "crimson")
      .addType("boolean", "lightgreen")
      .addType("any", "white")
    // .addConversion("number", "string", String)
    // .addConversion("number", "boolean", v => !!v)
    // .addConversion("number", "any", v => v)
    // .addConversion("string", "number", parseFloat)
    // .addConversion("string", "any", v => v)
    // .addConversion("boolean", "number", v => (v ? 1 : 0))
    // .addConversion("boolean", "string", String)
    // .addConversion("boolean", "any", v => v)
    // .addConversion("any", "number", parseFloat)
    // .addConversion("any", "string", String)
    // .addConversion("any", "boolean", Boolean);
  },
  mounted() {
    // //ライブラリ呼び出し
    // const createWindow = useWinBox()
    // const getNowURL = window.location.href+'welcome';
    // const welcome_window = createWindow({
    //   title: 'obaflowスタートページ',
    //   url: getNowURL,
    //   background: "#454545",
    //   width: 640,//windowの横幅
    //   border: 1,
    //   height: "70%",//windowの縦幅
    //   // position:
    //   x: "center",
    //   y: "center",
    //   onfocus: function () {
    //     //windowにフォーカスが当たった時の処理
    //     this.setBackground("#0081f0");//バーの色を緑にする
    //   },
    //   onblur: function () {
    //     //windowからフォーカスが外れた時の処理
    //     this.setBackground("#999");//バーの色をグレーにする
    //   },
    //   onclose: function () {
    //     //windowを閉じる時の処理
    //     if (confirm("ウェルカムウィンドウを閉じますか?")) {
    //       return false;
    //     };
    //     return true;
    //   },
    // }).removeControl("wb-max").removeControl("wb-full");
  },
  methods: {
    // menuFunc(event) {
    //   switch (event) {
    //     case 'saveEditorInfo':
    //       let state = JSON.stringify(this.editor.save());
    //       console.log( state);
    //       break

    //     default:
    //       console.log('INVALID EVENT!!!')
    //   }
    // }

  }
}
</script>
