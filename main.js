const { nextStageComputation } = require('./advanceStage');

const neighbourTable = new Map()

neighbourTable.set('1,2', new Set().add('2,2'))
neighbourTable.set('2,2', new Set().add('1,2').add('3,2'))
neighbourTable.set('3,2', new Set().add('2,2'))
neighbourTable.set('0,3', new Set().add('1,2'))
neighbourTable.set('0,2', new Set().add('1,2'))
neighbourTable.set('0,1', new Set().add('1,2'))
neighbourTable.set('1,1', new Set().add('1,2'))
neighbourTable.set('2,1', new Set().add('1,2').add('2,2').add('3,2'))
neighbourTable.set('2,3', new Set().add('1,2').add('2,2').add('3,2'))
neighbourTable.set('1,3', new Set().add('1,2'))
neighbourTable.set('1,3', new Set().add('2,2'))
neighbourTable.set('3,3', new Set().add('2,2'))
neighbourTable.set('1,1', new Set().add('2,2'))
neighbourTable.set('3,1', new Set().add('2,2'))
neighbourTable.set('3,3', new Set().add('3,2'))
neighbourTable.set('4,3', new Set().add('3,2'))
neighbourTable.set('4,2', new Set().add('3,2'))
neighbourTable.set('4,1', new Set().add('3,2'))
neighbourTable.set('3,1', new Set().add('3,2'))

const aliveSet = new Set().add('1,2').add('2,2').add('3,2')


const p1 = nextStageComputation({neighbourTable, aliveSet})
console.log(p1.aliveSet)
const p2 = nextStageComputation({neighbourTable: p1.neighbourTable, aliveSet: p1.aliveSet})
console.log(p2.aliveSet)
const p3 = nextStageComputation({neighbourTable: p2.neighbourTable, aliveSet: p2.aliveSet})
console.log(p3.aliveSet)


