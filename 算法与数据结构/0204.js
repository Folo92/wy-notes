const N = 15;
const abilities = [3, 1, 5, 7, 9, 2, 6, 16, 8, 5, 10, 4, 8, 11, 6];
const target = 9;

const teams = [];

abilities.sort((a, b) => b - a);
console.log(abilities);
const single = abilities.findIndex((item) => item < target);
teams.push(...abilities.slice(0, single));
abilities.splice(0, single);

let double = 0;

while (abilities.length > 1) {
  const result = getPair(abilities);
  if (!result) {
    break;
  }
}

function getPair(arr) {
  for (let i = arr.length - 1; i > 0; i++) {
    if (arr[0] + arr[i] >= target) {
      teams.push([arr[0], arr[i]]);
      arr.splice(i, 1);
      arr.splice(0, 1);
      double++;
      return true;
    }
  }
  return false;
}

console.log(abilities); // 剩余人员
console.log(single + double); // 组队数
console.log(teams); // 组队人员详情
