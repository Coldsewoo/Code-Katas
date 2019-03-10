/* eslint-disable max-len */

// 3 kyu

/*
Task
You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

Location altitude is defined as an integer number (0-9).
*/

function Node(point) {
  [this.value, this.x, this.y, this.before] = point;
  this.neighbors = [];
  this.heuristics = 0;
  this.addNeighbor = (mazeArr) => {
    // this.before.push(`${pre.x}:${pre.y}`);
    if (this.x > 0 && this.before.indexOf(`${this.x - 1}:${this.y}`) === -1) this.neighbors.push(new Node([mazeArr[this.x - 1][this.y], this.x - 1, this.y, this.before]));
    if (this.x < mazeArr.length - 1 && this.before.indexOf(`${this.x + 1}:${this.y}`) === -1) this.neighbors.push(new Node([mazeArr[this.x + 1][this.y], this.x + 1, this.y, this.before]));
    if (this.y > 0 && this.before.indexOf(`${this.x}:${this.y - 1}`) === -1) this.neighbors.push(new Node([mazeArr[this.x][this.y - 1], this.x, this.y - 1, this.before]));
    if (this.y < mazeArr[0].length - 1 && this.before.indexOf(`${this.x}:${this.y + 1}`) === -1) this.neighbors.push(new Node([mazeArr[this.x][this.y + 1], this.x, this.y + 1, this.before]));
  };
  this.addHeuristics = (pre) => {
    this.heuristics = pre.heuristics + Math.abs(this.value - pre.value);
  };
}

function pathFinder(strng) {
  const maze = strng.split(/\s/);
  const openSet = [];
  const grid = new Array(maze.length);
  for (let i = 0; i < grid.length; i += 1) {
    grid[i] = [];
  }
  const start = new Node([maze[0][0], 0, 0, []]);
  openSet.push(start);
  while (openSet.length > 0) {
    const current = openSet.shift();
    if ((grid[current.x][current.y] === undefined || current.heuristics <= grid[current.x][current.y]) && current.before.indexOf(`${current.x}:${current.y}`) === -1) {
      current.addNeighbor(maze);
      // eslint-disable-next-line no-restricted-syntax
      for (const neighbor of current.neighbors) {
        neighbor.addHeuristics(current);
        if ((grid[neighbor.x][neighbor.y] === undefined || neighbor.heuristics < grid[neighbor.x][neighbor.y]) && `${neighbor.x}:${neighbor.y}` !== `${current.x}:${current.y}`) {
          grid[neighbor.x][neighbor.y] = neighbor.heuristics;
          openSet.push(neighbor);
        }
      }
    }
  }
  return grid[maze.length - 1][maze[0].length - 1];
}

pathFinder(`7122110
3584983
0187618
4860468
7339903
1989230
1237465`); // ?
