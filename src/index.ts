import {observable} from 'mobx';

enum TEST {
  A = 1,
}

const fn = observable(() => {
  const a: TEST | string = TEST.A || 'ddd';
  console.log(a);
});

fn();

console.log(TEST.A, new Map<string, string>());

export default TEST;
