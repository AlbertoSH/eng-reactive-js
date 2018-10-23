import { range, from, of } from 'rxjs';

const initialValues = range(0, 10);
const withDuplicates = from([1, 1, 1, 2, 2, 3, 1, 2, 2, 3, 3, 3, 3]);

// Modify the emitted values so each value is multiplied by 2
export function multipliedBy2() {
  ///////// Write the solution in this block
  return initialValues;
  ///////// Write the solution in this block
}

// Same exercise as the previous one BUT you MUST use the provided method multiply(int x, int y)
export function multipliedBy2WithAnotherObservable() {
  ///////// Write the solution in this block
  return initialValues;
  ///////// Write the solution in this block
}

function multiply(x, y) {
  return of(x * y);
}

// Allow only values that are divisible by 3
export function divisibleBy3() {
  ///////// Write the solution in this block
  return initialValues;
  ///////// Write the solution in this block
}

// Emit only the first 4 values
export function first4Values() {
  ///////// Write the solution in this block
  return initialValues;
  ///////// Write the solution in this block
}

// Emit only the last 4 values
export function last4Values() {
  ///////// Write the solution in this block
  return initialValues;
  ///////// Write the solution in this block
}

// Emit only a value if it's different from the previous one
// i.e. if the values are [1, 1, 2, 1] emit [1, 2, 1]
export function onlyIfTheValueChanged() {
  ///////// Write the solution in this block
  return withDuplicates;
  ///////// Write the solution in this block
}

// Do not send any repeated values
// i.e. if the values are [1, 1, 2, 1] emit [1, 2]
export function ignoreDuplicates() {
  ///////// Write the solution in this block
  return withDuplicates;
  ///////// Write the solution in this block
}
