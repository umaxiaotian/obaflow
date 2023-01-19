<template>
  <div style="width:100vw;height:100vh">
    <MainBar />
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
import { PlayNode, ButtonNode, CopyTaskNode,DebugNode } from '@/components/NodeComponents'
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

    // add node to editor
    this.editor.registerNodeType("ButtonNode", ButtonNode, 'Custom')
    this.editor.registerNodeType("PlayNode", PlayNode, 'Play')
    this.editor.registerNodeType("CopyTask", CopyTaskNode, 'Tasks')
        this.editor.registerNodeType("DebugNode", DebugNode);

    // add some nodes so the screen is not empty on startup
    // const node1 = this.addNodeWithCoordinates(MathNode, 100, 140);
    //     const node2 = this.addNodeWithCoordinates(DisplayNode, 400, 140);
    //     this.editor.addConnection(
    //         node1.getInterface("Result"),
    //         node2.getInterface("Value")
    //     );

    // this.addNodeWithCoordinates(ButtonNode, 500, 500);



  },
  mounted() {
    // const createWindow = useWinBox()
    // const winbox = createWindow({

    //   title: 'テストウィンドウ',
    //   url: "/welcome",
    //   background: "#454545",

    //   max: false,
    //   min: false,
    //   hidden: false,
    //   border:1,
    //   width: 640,//windowの横幅
    //   height: "70%",//windowの縦幅
    //   // position:
    //   x: "center",
    //   y: "center",
    //   onfocus: function () {
    //     //windowにフォーカスが当たった時の処理
    //     this.setBackground("#00aa00");//バーの色を緑にする
    //   },
    //   onblur: function () {
    //     //windowからフォーカスが外れた時の処理
    //     this.setBackground("#999");//バーの色をグレーにする
    //   },
    //   onclose: function () {
    //     //windowを閉じる時の処理
    //     if (confirm("ウィンドウを閉じてもよろしいでしょうか?")) {
    //       return false;
    //     };
    //     return true;
    //   },
    // });






    // const winboxs = createWindow({

    //   title: 'テストウィンドウ',
    //   url: "/welcome",
    //   background: "#454545",
    //   width: 640,//windowの横幅
    //   border:1,
    // height: "70%",//windowの縦幅
    //   // position:
    //   x: "center",
    //   y: "center",
    //   onfocus: function(){
    //   //windowにフォーカスが当たった時の処理
    //   this.setBackground("#00aa00");//バーの色を緑にする
    // },
    // onblur: function(){
    //   //windowからフォーカスが外れた時の処理
    //   this.setBackground("#999");//バーの色をグレーにする
    // },
    // onclose: function(){
    //   //windowを閉じる時の処理
    //   if( confirm("ウィンドウを閉じてもよろしいでしょうか?") ) {
    //     return false;
    //   };
    //   return true;
    // },
    // }).removeControl("wb-max").removeControl("wb-full");


  },
  methods: {

  }
}
</script>
