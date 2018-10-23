import { TestScheduler } from 'rxjs/testing';

export function assertDeepEqual(actual, expected) {
  expect(actual).toEqual(expected);
}

export function createScheduler() {
  return new TestScheduler(assertDeepEqual);
}
