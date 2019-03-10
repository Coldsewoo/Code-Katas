/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */

// 4 kyu
/*
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.

Path Finder Series:
*/

function Node(point) {
  [this.value, this.x, this.y] = point;
  this.neighbors = [];
  this.addNeighbor = (mazeArr) => {
    if (this.x > 0 && mazeArr[this.x - 1][this.y] === '.') this.neighbors.push(new Node([mazeArr[this.x - 1][this.y], this.x - 1, this.y]));
    if (this.x < mazeArr.length - 1 && mazeArr[this.x + 1][this.y] === '.') this.neighbors.push(new Node([mazeArr[this.x + 1][this.y], this.x + 1, this.y]));
    if (this.y > 0 && mazeArr[this.x][this.y - 1] === '.') this.neighbors.push(new Node([mazeArr[this.x][this.y - 1], this.x, this.y - 1]));
    if (this.y < mazeArr[0].length - 1 && mazeArr[this.x][this.y + 1] === '.') this.neighbors.push(new Node([mazeArr[this.x][this.y + 1], this.x, this.y + 1]));
  };
}

function pathFinder(strng) {
  const maze = strng.split(/\s/);
  const openSet = [];
  const closedSet = [];
  const start = new Node([maze[0][0], 0, 0]);
  openSet.push(start);
  while (openSet.length > 0) {
    const current = openSet.shift();
    if (`${current.x},${current.y}` === `${maze.length - 1},${maze[0].length - 1}`) return true;
    if (closedSet.indexOf(`${current.x},${current.y}`) === -1) {
      closedSet.push(`${current.x},${current.y}`);
      current.addNeighbor(maze);
      for (const neighbor of current.neighbors) {
        openSet.push(neighbor);
      }
    }
  }
  return false;
}

pathFinder(`.W.
.W.
...`);
