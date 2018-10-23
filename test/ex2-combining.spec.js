import {
  combineOneByOne,
  combineMostRecentValues,
  allValuesInterleaved
} from '../src/ex2-combining';
import { createScheduler } from './utils';

describe('EX2 Combining', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = createScheduler();
  });

  it('combineOneByOneTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = combineOneByOne();
      const expected = '20ms 0 19ms 1 19ms 2 19ms 3 19ms (4|)';

      expectObservable(obs$).toBe(expected, [ '010', '111', '212', '313', '414' ]);
    });
  });

  it('combineMostRecentValuesTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = combineMostRecentValues();
      const expected = '20ms (ab) 6ms c 9ms (de) 6ms f 9ms g 19ms h 19ms i 19ms j 19ms k 19ms l 19ms m 19ms (n|)';

      expectObservable(obs$).toBe(expected, {
        a: '010',
        b: '110',
        c: '210',
        d: '211',
        e: '311',
        f: '411',
        g: '412',
        h: '413',
        i: '414',
        j: '415',
        k: '416',
        l: '417',
        m: '418',
        n: '419'
      });
    });
  });

  it('allValuesInterleavedTest()', () => {
    scheduler.run(({ expectObservable }) => {
      const obs$ = allValuesInterleaved();
      const expected = '10ms a 9ms (bc) 6ms d 9ms (ef) 6ms g 9ms h 19ms i 19ms j 19ms k 19ms l 19ms m 19ms n 19ms (o|)';

      expectObservable(obs$).toBe(expected, {
        a: 0,
        b: 10,
        c: 1,
        d: 2,
        e: 11,
        f: 3,
        g: 4,
        h: 12,
        i: 13,
        j: 14,
        k: 15,
        l: 16,
        m: 17,
        n: 18,
        o: 19
      });
    });
  });
});
