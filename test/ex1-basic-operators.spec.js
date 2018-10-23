import {
  multipliedBy2,
  multipliedBy2WithAnotherObservable,
  divisibleBy3,
  first4Values,
  last4Values,
  onlyIfTheValueChanged,
  ignoreDuplicates
} from '../src/ex1-basic-operators';
import { createScheduler } from './utils';

describe('EX1 Basic Operators', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = createScheduler();
  });

  it('multipliedBy2Test()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = multipliedBy2();
      const expected = '(0123456789|)';

      expectObservable(obs$).toBe(expected, [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18
      ]);
    });
  });

  it('modifiedBy2WithAnotherObservableTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = multipliedBy2WithAnotherObservable();
      const expected = '(0123456789|)';

      expectObservable(obs$).toBe(expected, [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18
      ]);
    });
  });

  it('divisibleBy3Test()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = divisibleBy3();
      const expected = '(0123|)';

      expectObservable(obs$).toBe(expected, [0, 3, 6, 9]);
    });
  });

  it('first4ValuesTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = first4Values();
      const expected = '(0123|)';

      expectObservable(obs$).toBe(expected, [0, 1, 2, 3]);
    });
  });

  it('last4ValuesTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = last4Values();
      const expected = '(0123|)';

      expectObservable(obs$).toBe(expected, [6, 7, 8, 9]);
    });
  });

  it('onlyIfTheValueChangedTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = onlyIfTheValueChanged();
      const expected = '(012345|)';

      expectObservable(obs$).toBe(expected, [1, 2, 3, 1, 2, 3]);
    });
  });

  it('ignoreDuplicatesTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = ignoreDuplicates();
      const expected = '(012|)';

      expectObservable(obs$).toBe(expected, [1, 2, 3]);
    });
  });
});
