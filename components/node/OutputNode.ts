// node OutputNode in component/node
import { Node } from '@baklavajs/core'

export class OutputNode extends Node {
    public type = 'OutputNode'
    public name = this.type

    public constructor() {
        super()
        this.addInputInterface('Input', 'InputOption')
        this.addOption('output', 'TextOption')
    }

    public calculate(data: any) {
        this.setOptionValue('output', this.getInterface('Input').value)
        return { test: true }
    }
}