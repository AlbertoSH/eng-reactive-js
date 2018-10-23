import {
  SINGLE_VALUE,
  MULTIPLE_VALUES,
  getSingleValue,
  getMultipleValue
} from '../src/ex0-creation';
import { createScheduler } from './utils';

describe('EX0 Creation Test', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = createScheduler();
  });

  it('should emit single value', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = getSingleValue();
      const expected = '(x|)';

      expectObservable(obs$).toBe(expected, { x: SINGLE_VALUE });
    });
  });

  it('should emit multiple values', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = getMultipleValue();
      const expected = '(01234|)';

      expectObservable(obs$).toBe(expected, MULTIPLE_VALUES);
    });
  });
});
