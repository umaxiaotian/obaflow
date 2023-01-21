import { NodeBuilder, Node } from '@baklavajs/core'

/**
 * PlayNode
 * @constructor
 */
export class PlayNode extends Node {
    constructor() {
        super();
        this.type = "PlayNode";
        this.name = "Play";
        this.addOption('Play名', 'InputOption')
        this.addOption('ユーザー切替有効', 'CheckboxOption')
        this.addOption('実行ユーザー名', 'InputOption')
        this.addOption('ホスト群', 'InputOption')
        this.addOutputInterface("Task", { type: "string" });
    }

    calculate() {
        const n1 = this.getOptionValue("Play名");
        console.log(n1)
        this.getInterface("Task").value = n1;
    }
}

/**
 * DataCopyNode
 * @constructor
 */

export const DataCopyNode = new NodeBuilder("DataCopyNode")
    .setName("DataCopyNode")
    .addInputInterface("Task", "NumberOption", 0, { type: "number" })
    .addOption("ValueText", "TextOption")
    .addOption('ローカルファイルパス', 'InputOption')
    .addOption('アップロード先パス', 'InputOption')
    .addOption('CHMOD', 'InputOption')
    .addOption('ファイル所有者名', 'InputOption')
    .onCalculate(node => {
        let value = node.getInterface("Task").value;
        node.setOptionValue("ValueText", value);
    })
    .build();

/**
 * ButtonNode
 * @constructor
 */
export const ButtonNode = new NodeBuilder("ButtonNode")
    .setName("ButtonNode")
    .addOutputInterface("Test")
    .addOption({ hi: "hello", test: "tes" }, "ButtonOption", function () {
        return { name: "hi", test: "tes" };
    })
    .build();

/**
 * DebugNode
 * @constructor
 */
export const DebugNode = new NodeBuilder("DebugNode")
    .setName("DebugNode")
    .addInputInterface("Probe", "InputOption", "", { type: "string" })
    .addOption("ValueText", "TextOption")
    .onCalculate(n => {
        let value = n.getInterface("Probe").value;
        n.setOptionValue("ValueText", value);
    })
    .build();