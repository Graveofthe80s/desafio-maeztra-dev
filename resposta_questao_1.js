function check(num) {
  let arr = ("" + num).split("");
  let nArr = [];
  arr.map((x) => nArr.push(parseInt(x)));

  let seq = true;

  for (let i = 0; i < nArr.length - 1; i++) {
    if (nArr[i] > nArr[i + 1]) {
      seq = false;
    }
  }
  if (!seq) {
    for (let j = nArr.length - 1; j > 0; j--) {
      if (nArr[j] <= nArr[j - 1]) {
        seq = true;
      } else {
        seq = false;
        return console.log(`${num} -> Não está ordenado!`);
      }
    }
  }
  return seq
    ? console.log(`${num} -> Está ordenado!`)
    : console.log(`${num} -> Não está ordenado!`);
}

check(123456); // Está ordenado
check(135426); // Não está ordenado
check(876521); // Está ordenado
check(658231); // Não está ordenado
