import { Bottles } from '../lib/bottles';

describe('Bottles', () => {
  test('the first verse', () => {
    const expected =
      '99 bottles of milk on the wall, ' +
      '99 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of milk on the wall.\n';
    expect(new Bottles().verse(99)).toBe(expected);
  });

  test('another verse', () => {
    const expected =
      '3 bottles of milk on the wall, ' +
      '3 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of milk on the wall.\n';
    expect(new Bottles().verse(3)).toBe(expected);
  });

  test('verse 2', () => {
    const expected =
      '2 bottles of milk on the wall, ' +
      '2 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of milk on the wall.\n';
    expect(new Bottles().verse(2)).toBe(expected);
  });

  test('verse 1', () => {
    const expected =
      '1 bottle of milk on the wall, ' +
      '1 bottle of milk.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of milk on the wall.\n';
    expect(new Bottles().verse(1)).toBe(expected);
  });

  test('verse 0', () => {
    const expected =
      'No more bottles of milk on the wall, ' +
      'no more bottles of milk.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of milk on the wall.\n';
    expect(new Bottles().verse(0)).toBe(expected);
  });

  test('a couple verses', () => {
    const expected =
      '99 bottles of milk on the wall, ' +
      '99 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of milk on the wall.\n' +
      '\n' +
      '98 bottles of milk on the wall, ' +
      '98 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '97 bottles of milk on the wall.\n';
    expect(new Bottles().verses(99, 98)).toBe(expected);
  });

  test('a few verses', () => {
    const expected =
      '2 bottles of milk on the wall, ' +
      '2 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of milk on the wall.\n' +
      '\n' +
      '1 bottle of milk on the wall, ' +
      '1 bottle of milk.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of milk on the wall.\n' +
      '\n' +
      'No more bottles of milk on the wall, ' +
      'no more bottles of milk.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of milk on the wall.\n';
    expect(new Bottles().verses(2, 0)).toBe(expected);
  });

  test('the whole song', () => {
    const bottles = new Bottles();
    expect(bottles.song()).toBe(bottles.verses(99, 0));
  });
});
