/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */

// 4 kyu
/*
That's terrible! Some evil korrigans have abducted you during your sleep and threw you into a maze of thorns in the scrubland D:
But have no worry, as long as you're asleep your mind is floating freely in the sky above your body.

Seeing the whole maze from above in your sleep, can you remember the list of movements you'll have to do to get out when you awake?

Input
You are given the whole maze maze as a 2D grid, more specifically in your language:

an array of strings

maze[0][0] is the top left-hand corner

maze[maze.length - 1][maze[0].length - 1] is the bottom right-hand corner

Inside this 2D grid:

' ' is some walkable space
'#' is a thorn bush (you can't pass through)
'^', '<', 'v' or '>' is your sleeping body facing respectively the top, left, bottom or right side of the map.
Output
Write the function escape that returns the list/array of moves you need to do relatively to the direction you're facing in order to escape the maze (you won't be able to see the map when you wake up). as an array of the following instructions:

'F' move one step forward
'L' turn left
'R' turn right
'B' turn back
Note: 'L','R', and 'B' ONLY perform a rotation and will not move your body

If the maze has no exit, return an empty array.

This is a real maze, there is no "escape" point. Just reach the edge of the map and you're free!
You don't explicitely HAVE to find the shortest possible route, but you're quite likely to timeout if you don't ;P
Aside from having no escape route the mazes will all be valid (they all contain one and only one "body" character and no other characters than the body, "#" and " ". Besides, the map will always be rectangular, you don't have to check that either)

*/
// Return the array of movements to execute to get out of the maze
const grid = ['#########################################',
  '#     #     #     #   #     #   #   #    ',
  '# ##### ### # ### # # ##### # # ### ### #',
  '# #     # # # #   # # #     # #       # #',
  '# # ##### # # ####### # ##### ####### # #',
  '# # #   # # #     #   #     # #     #   #',
  '# # # # # # ### # # ####### # # ### ### #',
  '#   # #   #   # #         # # # #       #',
  '##### ####### # ######### # # # ### #####',
  '#               #     #   #   #   # #   #',
  '# ############### ### ##### ##### # # # #',
  '# #             #   #     #   #   #   # #',
  '# # ####### ### ### ##### ### # ####### #',
  '#   #     # #     # #   #   # # #       #',
  '####### # # # ##### # ### # # # #########',
  '#   #   # # #       #   # #   #   # #   #',
  '# # # ### # ########### # ####### # # # #',
  '# #   #   #   #   #   # #     #   #   # #',
  '##### # ##### # ### # # ##### # # # ### #',
  '#<    #       #     #         # #   #   #',
  '#########################################'];

function Node(point) {
  const moveToward = ['RF', 'BF', 'LF', 'F', 'RF', 'BF', 'LF'];
  [this.x, this.y, this.direction] = point;
  this.neighbors = [];
  this.before = '';
  this.parent = [];
  this.addNeighbors = (maze) => {
    if (this.x > 0 && maze[this.x - 1][this.y] === ' ') this.neighbors.push(new Node([this.x - 1, this.y, 0]));
    if (this.y > 0 && maze[this.x][this.y - 1] === ' ') this.neighbors.push(new Node([this.x, this.y - 1, 1]));
    if (this.x < maze.length - 1 && maze[this.x + 1][this.y] === ' ') this.neighbors.push(new Node([this.x + 1, this.y, 2]));
    if (this.y < maze[0].length - 1 && maze[this.x][this.y + 1] === ' ') this.neighbors.push(new Node([this.x, this.y + 1, 3]));
  };
  this.addBefore = (beforeNode) => {
    this.before = moveToward[beforeNode.direction - this.direction + 3];
  };
}

function escape(maze) {
  const directions = ['^', '<', 'v', '>'];
  const openSet = [];
  const closedSet = [];
  let start;
  for (const direction of directions) {
    for (let i = 0; i < maze.length; i += 1) {
      if (maze[i].indexOf(direction) !== -1) start = [i, maze[i].indexOf(direction), directions.indexOf(direction)];
    }
  }
  openSet.push(new Node(start));
  while (openSet.length > 0) {
    let current = openSet.shift();
    if (current.x === 0 || current.x === maze.length - 1 || current.y === 0 || current.y === maze[0].length - 1) {
      let result = '';
      while (current.parent) {
        result = current.before + result;
        current = current.parent;
      }
      return result;
    }

    if (closedSet.indexOf(`${current.x},${current.y}`) === -1) {
      closedSet.push(`${current.x},${current.y}`);
      current.addNeighbors(maze);
      current.neighbors.forEach((neighbor) => {
        // eslint-disable-next-line no-param-reassign
        neighbor.parent = current;
        neighbor.addBefore(current);
        openSet.push(neighbor);
      });
    }
  }
  return [];
}


escape(grid);
