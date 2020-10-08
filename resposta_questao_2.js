let array = [1, 2, 44, 6, 13, 2, 44, 7, 6, 1];
let checkForDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

let duplicates = [...new Set(checkForDuplicates(array))];

console.log(duplicates);
