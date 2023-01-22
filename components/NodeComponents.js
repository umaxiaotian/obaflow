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
        this.count = 1;

        this.addOption('Play名', 'InputOption')
        this.addOption('ユーザー切替有効', 'CheckboxOption')
        this.addOption('実行ユーザー名', 'InputOption')
        this.addOption('ホスト群', 'InputOption')
        this.addOption('タスク数', 'IntegerOption', this.count, '', {
            min: 1, max: 100
        })

    }
    addType(count) {
        this.addInputInterface("タスクスロット" + count, '', '', { type: "string" });

    }
    delType(count) {
        this.removeInterface("タスクスロット" + count)
    }


    calculate() {
        this.addOutputInterface("PlayManager", { type: 'number' })
        const maxTaskLimit = this.getOptionValue('タスク数');
        for (let i = 0; i <= maxTaskLimit; i++) {
            this.addType(i);
        }
        if (maxTaskLimit >= this.count) {
            this.delType(maxTaskLimit)
        }

        // console.log(maxTaskLimit)
        // const taskType='PlayTask';
        // const playName= this.getOptionValue("Play名");
        // const becomeUserFlg= this.getOptionValue("ユーザー切替有効");
        // const becomeUserName= this.getOptionValue("実行ユーザー名");
        // const inventryHost= this.getOptionValue("ホスト群");
        // const propData={taskType:taskType,playName:playName,becomeUserFlg:becomeUserFlg,becomeUserName:becomeUserName,inventryHost:inventryHost}
        // // console.log(propData)
        // this.getInterface("Task").value = propData;
    }
}

/**
 * DataCopyNode
 * @constructor
 */

export const DataCopyNode = new NodeBuilder("DataCopyNode")
    .setName("DataCopyNode")
    .addOption("ValueText", "TextOption")
    .addOption('ローカルファイルパス', 'InputOption')
    .addOption('アップロード先パス', 'InputOption')
    .addOption('CHMOD', 'InputOption')
    .addOption('ファイル所有者名', 'InputOption')
    .addOutputInterface("Task", { type: "string" })
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