/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */

// 6 kyu
/*
The walker

The walker starts from point O, walks along OA, AB and BC. When he is in C (C will be in the upper half-plane), what is the distance CO? What is the angle tOC in positive degrees, minutes, seconds?

Angle tOA is alpha (here 45 degrees), angle hAB is beta (here 30 degrees), angle uBC is gamma(here 60 degrees).

Task
function solve(a, b, c, alpha, beta, gamma) with parameters

a, b, c: positive integers in units of distance (stand for OA, AB, BC)
alpha, beta, gamma: positive integers in degrees (positive angles are anticlockwise)
returns an array

first element: distance CO (rounded to the nearest integer)
then angle tOC with the third following elements:
second element of the array: number of degrees in angle tOC (truncated positive integer)
third element of the array: number of minutes in angle tOC (truncated positive integer)
fourth element of the array: number of seconds in angle tOC (truncated positive integer)
*/


function solve(a, b, c, alpha, beta, gamma) {
  const A = [a * Math.cos(alpha * Math.PI / 180), a * Math.sin(alpha * Math.PI / 180)];
  const B = [A[0] - b * Math.sin(beta * Math.PI / 180), A[1] + b * Math.cos(beta * Math.PI / 180)];
  const C = [B[0] - c * Math.cos(gamma * Math.PI / 180), B[1] - c * Math.sin(gamma * Math.PI / 180)];
  const dist = Math.sqrt(C[0] ** 2 + C[1] ** 2);
  const tanC = Math.atan2(C[1], C[0]) * 180 / Math.PI;
  const degree = Math.floor(tanC);
  const minute = Math.floor((tanC - degree) * 60);
  const second = Math.floor(((tanC - degree) * 60 - minute) * 60);
  return [Math.round(dist), Math.floor(tanC), minute, second];
}

solve(12, 20, 18, 45, 30, 60);
// [15, 135, 49, 18]
