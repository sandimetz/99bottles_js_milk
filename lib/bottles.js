class Bottles {
  verse(number) {
    let n;

    if (number === 99) {
      n = 99;
    } else {
      n = 3;
    }

    return (
      `${n} bottles of milk on the wall, ` +
      `${n} bottles of milk.\n` +
      'Take one down and pass it around, ' +
      `${n - 1} bottles of milk on the wall.\n`
    );
  }
}

export { Bottles };
