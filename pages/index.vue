<template>
  <div style="width:100vw;height:100vh">
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
  </div>
</template>

<script>
import { Editor, NodeBuilder }  from "@baklavajs/core"
import { ViewPlugin }           from "@baklavajs/plugin-renderer-vue"
import { Engine }               from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin }  from "@baklavajs/plugin-interface-types"
import { OptionPlugin }         from "@baklavajs/plugin-options-vue"
import { MathNode } from '@/components/node/MathNode'
import { DisplayNode } from '@/components/node/DisplayNode'

export default {
    data: () => ({
        editor: new Editor(),
        viewPlugin: new ViewPlugin(),
        engine: new Engine(true),
        intfTypePlugin: new InterfaceTypePlugin()
    }),
    created() {
      this.editor.use(this.viewPlugin);
      this.editor.use(this.engine)
      this.editor.use(new OptionPlugin())
      this.editor.use(this.intfTypePlugin)
      this.intfTypePlugin.addType("number", "#00FF00");
      this.viewPlugin.enableMinimap = true;

    // add node to editor
    this.editor.registerNodeType('MathNode', MathNode)
    this.editor.registerNodeType('DisplayNode', DisplayNode)   
    },
    methods: {
      
    }
}
</script>