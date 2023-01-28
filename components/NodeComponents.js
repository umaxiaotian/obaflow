import { NodeBuilder, Node } from '@baklavajs/core'


/**
 * ExecNode
 * ノード要素から受けとったデータを理解し成形します。
 * @constructor
 */
export class ExecNode extends Node {
    constructor() {
        super();
        this.type = "ExecNode";
        this.name = "ExecNode";
        this.addOption("OUT-MSG", "TextOption")
        this.addInputInterface('PLAY(IN)', '', '', { type: "number" });
    }
    calculate() {
        const message = "PLAY(IN)を実行"
        this.setOptionValue('OUT-MSG', message);
    }
}

/**
 * PlayNode
 * 各タスクをまとめ実行ユーザー、ホスト群を設定する
 * @constructor
 */
export class PlayNode extends Node {
    constructor() {
        super();
        this.type = "PlayNode";
        this.name = "PlayBookMix";

        this.addOption('Play名', 'InputOption')
        this.addOption('ユーザー切替有効', 'CheckboxOption')
        this.addOption('実行ユーザー名', 'InputOption')
        this.addOption('ホスト群', 'InputOption')
        this.addInputInterface('PLAY(IN)', '', '', { type: "number" });
        this.addInputInterface("TASK(IN)", '', '', { type: "string" });
        this.addOutputInterface("PLAY(OUT)", { type: 'number' })


    }
    calculate() {
    }
}

/**
 * DataCopyNode
 * @constructor
 */

export class DataCopyNode extends Node {
    constructor() {
        super();
        this.type = "DataCopyNode";
        this.name = "DataCopy";
        this.addInputInterface('TASK', '', '', { type: "string" })
        this.addOption("ValueText", "TextOption")
        this.addOption('ローカルファイルパス', 'InputOption')
        this.addOption('アップロード先パス', 'InputOption')
        this.addOption('CHMOD', 'InputOption')
        this.addOutputInterface("Task", { type: "string" })
        this.addOption('ファイル所有者名', 'InputOption')
    }
    calculate() {
        const LocalFilePath = this.getOptionValue('ローカルファイルパス');
        const UploadFilePath = this.getOptionValue('アップロード先パス');
        const Permission = this.getOptionValue('CHMOD');
        const Owner = this.getOptionValue('ファイル所有者名');
        const InputTasks = this.getInterface('TASK').value;
        const CreateTaskArray = [{
            Type: "TASK", 
            DataType:"DataCopy",
            Param: {
                LocalFilePath: LocalFilePath,
                UploadFilePath: UploadFilePath,
                Permission: Permission,
                Owner: Owner
            }
        }]
        //受け取ったデータをドッキングする
        let DockData = [];
        if(InputTasks){
            //インプットデータがある場合、CONCATで配列同士を結合する
            DockData = InputTasks.concat(CreateTaskArray);
        }else{
            //インプットデータがない場合自分のノードデータをダイレクトに格納する
            DockData =  CreateTaskArray;

        }
        //配列構文を出力する
        this.getInterface('Task').value = DockData;
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
    .addInputInterface("Probe", "InputOption", "", { type: "string" })
    .addOption("ValueText", "TextOption")
    .onCalculate(n => {
        let value = n.getInterface("Probe").value;
        n.setOptionValue("ValueText", value);
    })
    .build();