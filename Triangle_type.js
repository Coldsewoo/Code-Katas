/* eslint-disable max-len */
// 6 kyu
/*
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
If all angles are less than 90°, this triangle is acute and function should return 1.
If one angle is strictly 90°, this triangle is right and function should return 2.
If one angle more than 90°, this triangle is obtuse and function should return 3.
If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.
Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

Examples:
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.
*/
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c) {
  const arr = [a, b, c].sort((y, z) => z - y);
  const [one, two, three] = arr;
  if (one >= two + three) return 0;
  const check = pytagoras(one, two, three);
  if (check < 0) return 1;
  if (check === 0) return 2;
  return 3;
  function pytagoras(a, b, c) {
    return a ** 2 - b ** 2 - c ** 2;
  }
}
