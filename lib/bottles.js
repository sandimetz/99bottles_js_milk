class Bottles {
  verse(number) {
    return (
      `${number} bottles of milk on the wall, ` +
      `${number} bottles of milk.\n` +
      'Take one down and pass it around, ' +
      `${number-1} bottles of milk on the wall.\n`
    );
  }
}

export { Bottles };
