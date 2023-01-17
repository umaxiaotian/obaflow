import { NodeBuilder,Node } from '@baklavajs/core'

/**
 * PlayNode
 * @constructor
 */
/**
 * PlayNode
 * @constructor
 */
export class PlayNode extends Node {
    constructor() {
        super();
        this.type = "PlayNode";
        this.name = "PlayNode";
        this.addOption('Play名', 'InputOption')
        this.addOption('ユーザー切替有効', 'CheckboxOption')
        this.addOption('実行ユーザー名', 'InputOption')
        this.addOption('ホスト群', 'InputOption')
        this.addOutputInterface('Task')
    }

    calculate() {
        const t1 = this.getOptionValue("Play名").value;
        console.log(t1);
        this.getOptionValue("Task").value = 'TEST_VALLLLL';
      
    }
}
/**
 * PlayNode
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


    export const DisplayNode = new NodeBuilder("DisplayNode")
    .setName("Display")
    .addInputInterface("Value")
    .addOption("ValueText", "TextOption")
    .addOption("Test", "InputOption")
    .onCalculate(n => {
        let value = n.getInterface("Value").value;
        if (typeof value === "number") {
            value = value.toFixed(3);
        }
        n.setOptionValue("ValueText", value);
    })
    .build();

    export class MathNode extends Node {
        constructor() {
            super();
            this.type = "MathNode";
            this.name = "Math";
            this.addOption("Number 1", "InputOption");
            this.addOption("Number 2", "InputOption");
            this.addOption("Operation", "SelectOption", "Add", undefined, {
                items: ["Add", "Subtract"]
            });
            this.addOutputInterface("Result");
        }
    
        calculate() {
            const n1 = this.getOptionValue("Number 1");
            const n2 = this.getOptionValue("Number 2");
            console.log(n1)
            const operation = this.getOptionValue("Operation");
            let result;
            if (operation === "Add") {
                result = n1 + n2;
            } else if (operation === "Subtract") {
                result = n1 - n2;
            }
            this.getInterface("Result").value = result;
        }
    }
    