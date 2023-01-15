import { NodeBuilder } from '@baklavajs/core'

export const MathNode = new NodeBuilder('MathNode')
  .setName('Math')
  .addInputInterface('Number 1', 'NumberOption', 1)
  .addInputInterface('Number 2', 'NumberOption', 10)
  .addOption('Operation', 'SelectOption', 'Add', undefined, {
    items: ['Add', 'Subtract']
  })
  .addOutputInterface('Result')
  .onCalculate((n) => {
    const n1 = this.getInterface('Number 1').value
    const n2 = this.getInterface('Number 2').value
    const operation = this.getOptionValue('Operation')
    let result
    if (operation === 'Add') {
      result = n1 + n2
    } else if (operation === 'Subtract') {
      result = n1 - n2
    }
    this.getInterface('Result').value = result
  })
  .build()