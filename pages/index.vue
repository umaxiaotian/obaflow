<template>
  <div style="width:90vw;height:90vh">
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
  </div>
</template>

<script>
import { Editor, NodeBuilder }  from "@baklavajs/core"
import { ViewPlugin }           from "@baklavajs/plugin-renderer-vue"
import { Engine }               from "@baklavajs/plugin-engine"
import { InterfaceTypePlugin }  from "@baklavajs/plugin-interface-types"
import { OptionPlugin }         from "@baklavajs/plugin-options-vue"
import { OutputNode } from '@/components/node/OutputNode.ts'
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
    // create new node
    const SelectTestNode = new NodeBuilder("SelectTestNode")
      .addOption("Simple", "SelectOption", "A", undefined, { items: ["A", "B", "C"] })
      .addOption("Advanced", "SelectOption", 3, undefined, { items: [
          { text: "X", value: 1 },
          { text: "Y", value: 2 },
          { text: "Z", value: 3 },
      ] })
      .addOutputInterface("Simple")
      .addOutputInterface("Advanced")
      .onCalculate((n) => {
          n.getInterface("Simple").value = n.getOptionValue("Simple");
          n.getInterface("Advanced").value = n.getOptionValue("Advanced");
      })
      .build();
    // add node to editor
    this.editor.registerNodeType("SelectTestNode", SelectTestNode)
    this.editor.registerNodeType("OutputNode", OutputNode)
     
    },
    methods: {
      
    }
}
</script>