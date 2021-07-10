import { version } from 'typescript';

const enum TEST {
  A = 1,
}

console.log(version, TEST.A, new Map<string, string>());

export default TEST;
