/* eslint-disable max-len */
/* eslint-disable strict */

'use strict';

// 5 kyu

/*
Once upon a time, on a way through the old wild west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
How I crossed the desert the smart way.
The directions given to the man are, for example, the following:
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or (haskell)
[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
["WEST"]
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
*/

function dirReduc(arr) {
  let strng = arr.join(' '); // ?
  const regEx = /(NORTH\s+SOUTH|SOUTH\s+NORTH|EAST\s+WEST|WEST\s+EAST)/;
  while (regEx.test(strng) === true) {
    strng = strng.replace(regEx, '');
  }
  return strng.length;
}


dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // ?
// ["WEST"])
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
// ["NORTH", "WEST", "SOUTH", "EAST"])
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
// [])
