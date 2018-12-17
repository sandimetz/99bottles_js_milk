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
});
