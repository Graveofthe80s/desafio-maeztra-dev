function pos(n) {
  if (n == 0) {
    return 1;
  }
  let res = n;

  if (n > 2) {
    res *= --n;
  }
  return console.log(res);
}

pos(7);
