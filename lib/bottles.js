import { downTo } from './helpers';

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(hi, lo) {
    return downTo(hi, lo).map(n => this.verse(n)).join('\n');
  }

  verse(n) {
    return (
      `${n === 0 ? 'No more' : n} bottle${n === 1 ? '' : 's'}` +
      ' of milk on the wall, ' +
      `${n === 0 ? 'no more' : n} bottle${n === 1 ? '' : 's'} of milk.\n` +
      `${n > 0   ? `Take ${n > 1 ? 'one' : 'it'} down and pass it around`
                 : 'Go to the store and buy some more'}, ` +
      `${n-1 < 0 ? 99 : n-1 === 0 ? 'no more' : n-1} bottle${n-1 === 1 ? '' : 's'}`+
      ' of milk on the wall.\n'
    );
  }
}

export { Bottles };
