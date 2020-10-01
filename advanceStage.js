function isAliveNext(isAlive, neighbours) {
  if (neighbours.size < 2) {
    return false
  } else if (neighbours.size == 2 && isAlive) {
    return true
  } else if (neighbours.size == 3) {
    return true
  } else if (neighbours > 3) {
    return false
  }
  return false
}

function computeNeighbour(cell) {
  const splitted = cell.split(',')
  const x = parseInt(splitted[0])
  const y = parseInt(splitted[1])
  return [
    `${x - 1},${y}`,
    `${x + 1},${y}`,
    `${x},${y - 1}`,
    `${x},${y + 1}`,
    `${x - 1},${y - 1}`,
    `${x - 1},${y + 1}`,
    `${x + 1},${y + 1}`,
    `${x + 1},${y - 1}`
  ]
}

// Return new set of neighbours
function addNeighbour(cell, neighbourTable, newNeighbour) {
  const neighbours = neighbourTable.get(cell)
  const newNeighbours = new Set()
  neighbours && neighbours.forEach(neighbour => {
    newNeighbours.add(neighbour)
  });
  newNeighbours.add(newNeighbour)
  return newNeighbours
}

function nextStageComputation({ neighbourTable, aliveSet }) {
  const newNeighbourTable = new Map()
  const newAliveSet = new Set()

  neighbourTable.forEach((neighbours, cell) => {
    if (isAliveNext(aliveSet.has(cell), neighbours)) {
      newAliveSet.add(cell)
      neighbours.forEach(neighbour => {
        const neighboursOfNeighbour = addNeighbour(neighbour, newNeighbourTable, cell)
        newNeighbourTable.set(neighbour, neighboursOfNeighbour)
      })
    }
  });

  return {
    neighbourTable: newNeighbourTable,
    aliveSet: newAliveSet
  }
}

module.exports = {
  nextStageComputation
}
