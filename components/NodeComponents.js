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
        this.addOutputInterface("Task");
    }

    calculate() {
        const n1 = this.getOptionValue("Play名");
        console.log(n1)
        this.getInterface("Task").value = n1;
    }
}

/**
 * CopyTaskNode
 * @constructor
 */
export class CopyTaskNode extends Node {
    constructor() {
        super();
        this.type = "CopyTaskNode";
        this.name = "CopyTas";
        this.addInputInterface("Task", "InputOption");
        this.addInputInterface("Number 2", "InputOption");
        this.addOutputInterface("Result");
    }

    calculate() {
        const n1 = this.getInterface("Number 1").value;
        const n2 = this.getInterface("Number 2").value;

    }
}

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
    .addInputInterface("Probe")
    .addOption("ValueText", "TextOption")
    .onCalculate(n => {
        let value = n.getInterface("Probe").value;
        n.setOptionValue("ValueText", value);
    })
    .build();