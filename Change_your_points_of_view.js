/* eslint-disable max-len */
/*
This is the first part of this kata series. Second part is here.

We want to create a simple interpreter of assembler which will support the following instructions:

mov x y - copies y (either a constant value or the content of a register) into register x
inc x - increases the content of register x by one
dec x - decreases the content of register x by one
jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward), but only if x (a constant or a register) is not zero
Register names are alphabetical (letters only). Constants are always integers (positive or negative).

Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

The function will take an input list with the sequence of the program instructions and will return a dictionary with the contents of the registers.

Also, every inc/dec/jnz on a register will always be followed by a mov on the register first, so you don't need to worry about uninitialized registers.
*/

function simpleAssembler(program) {
  let index = 0;
  const result = {};
  const keys = Object.keys(result);
  while (index < program.length) {
    const item = program[index].split(/\s/);
    switch (item[0]) {
      case 'mov':
        if (keys.indexOf(item[2]) === -1) result[item[1]] = Number(item[2]);
        else result[item[1]] = result[item[2]];
        index += 1;
        break;
      case 'inc':
        result[item[1]] += 1;
        index += 1;
        break;
      case 'dec':
        result[item[1]] -= 1;
        index += 1;
        break;
      case 'jnz':
        if (result[item[1]] === 0) {
          index += 1;
          break;
        } else index += parseInt(item[2], 10);
        break;
      default:
        break;
    }
  }
  return result;
}

simpleAssembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']); // ?
[]
;