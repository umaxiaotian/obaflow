<template>
  <v-app>
  <div style="width:100vw;height:100vh">
    <MainBar v-model="editor"/>
    <hint-overlay />
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
  </div>
</v-app>
</template>
<style lang="scss" >
.ExecNode {
  .__title{
  background: rgb(245, 27, 27);
  }
  background: rgb(139, 38, 20);
}
.PlayRuleSettingNode {
  .__title{
  background: rgb(13, 114, 161);
  }
  background: rgb(9, 67, 90);
  .dark-input{
    background-color:rgb(5, 50, 71);
  }
  .dark-checkbox .__checkmark-container{
    background-color:rgb(5, 50, 71);
  }
}
</style>
<script>
import { Editor } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
//NodeComponentからエントリしているコンポーネント一覧
import { PlayNode, ButtonNode, DataCopyNode, DebugNode,ExecNode } from '@/components/NodeComponents'
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
      },
      dialog: false,
    }
  },
  created() {
    this.editor.use(this.viewPlugin);
    this.editor.use(this.engine);
    this.editor.use(new OptionPlugin())
    this.editor.use(this.intfTypePlugin)
    this.viewPlugin.enableMinimap = true;
    this.viewPlugin.registerOption("ButtonOption", ButtonOption);
    // Nodeエディタへ登録;
    this.editor.registerNodeType("ButtonNode", ButtonNode, 'Custom');
    this.editor.registerNodeType("PlayNode", PlayNode, 'Play');
    this.editor.registerNodeType("DataCopyNode", DataCopyNode, 'Tasks');
    this.editor.registerNodeType("DebugNode", DebugNode);
    this.editor.registerNodeType("ExecNode", ExecNode);
    

    // 接続チェック
    this.intfTypePlugin
      .addType("number", "cyan")
      .addType("string", "crimson")
      .addType("inventry_host", "green")
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
