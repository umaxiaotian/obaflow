import { NodeBuilder } from '@baklavajs/core'

/**
 * TaskNode
 * @constructor
 */
export const TaskNode = new NodeBuilder('TaskNode')
    .setName('TaskNode')
    .addOption('TaskName', 'InputOption')
    .addOutputInterface('Result')
    .build()

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