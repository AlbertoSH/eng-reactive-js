import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

const values1 = interval(10).pipe(take(5));

const values2 = interval(20).pipe(
  map(i => i + 10),
  take(10)
);

// You have to combine the values from `values1` and `values2` one by one and concatenate them as if they were strings
// i.e. the first value will be "010" (0 from values1 and 10 from values2)
export function combineOneByOne() {
  ///////// Write the solution in this block
  return null;
  ///////// Write the solution in this block
}

// You have to combine the most recent values emitted by `values1` and `values2`
// Each values should be combined in the same way as in the previous example
export function combineMostRecentValues() {
  ///////// Write the solution in this block
  return null;
  ///////// Write the solution in this block
}

// You don't need to combine any values in this exercise. Just join `values1` and `values2` into one Observable
export function allValuesInterleaved() {
  ///////// Write the solution in this block
  return null;
  ///////// Write the solution in this block
}
