<template>
  <div style="width:100vw;height:100vh">
    <MainBar />
    <hint-overlay />
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
  </div>
</template>

<script>
import HintOverlay from "@/components/HintOverlay.vue";
import { Editor, NodeBuilder } from "@baklavajs/core"
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue"
import { Engine } from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin } from "@baklavajs/plugin-interface-types"
import { OptionPlugin } from "@baklavajs/plugin-options-vue"
import { MathNode } from '@/components/node/MathNode'
import { DisplayNode } from '@/components/node/DisplayNode'
import { ButtonNode } from '@/components/node/ButtonNode'
import ButtonOption from "@/components/ButtonOption.vue";
import MainBar from "@/components/MainBar";
import { useWinBox } from 'vue-winbox'


export default {
  components: { HintOverlay, MainBar },
  data: () => ({
    editor: new Editor(),
    viewPlugin: new ViewPlugin(),
    engine: new Engine(true),
    intfTypePlugin: new InterfaceTypePlugin(),

    options: {
      title: 'テストウィンドウ',
    }
  }),
  created() {
    this.editor.use(this.viewPlugin);
    this.editor.use(this.engine)
    this.editor.use(new OptionPlugin())
    this.editor.use(this.intfTypePlugin)
    this.intfTypePlugin.addType("number", "#00FF00");
    this.viewPlugin.enableMinimap = true;
    this.viewPlugin.registerOption("ButtonOption", ButtonOption);

    // add node to editor
    this.editor.registerNodeType('MathNode', MathNode)
    this.editor.registerNodeType('DisplayNode', DisplayNode)
    this.editor.registerNodeType("ButtonNode", ButtonNode)

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
    const createWindow = useWinBox()
    const winbox = createWindow({
      title: 'テストウィンドウ',
      url: "/",

      // position:
      x: "center",
      y: "center",
    })


  },
  methods: {

  }
}
</script>