/* eslint-disable max-len */
// 7 kyu
/*
In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).
*/

function ranking(people) {
  const result = people.sort((a, b) => {
    if (a.points - b.points === 0) return a.name.localeCompare(b.name);
    return b.points - a.points;
  });
  let positionNum = 1;
  // eslint-disable-next-line no-restricted-syntax
  for (const index in result) {
    if (index === '0') {
      result[index].position = positionNum;
    } else {
      if (result[index].points < result[index - 1].points) positionNum = Number(index) + 1;
      result[index].position = positionNum;
    }
  }
  return result;
}


const input = [
  {
    name: 'John',
    points: 100,
  },
  {
    name: 'Bob',
    points: 130,
  },
  {
    name: 'Mary',
    points: 120,
  },
  {
    name: 'Kate',
    points: 120,
  },
];

ranking(input);
