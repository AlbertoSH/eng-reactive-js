import { of, from } from 'rxjs';

export const SINGLE_VALUE = "I'm a single value";
export const MULTIPLE_VALUES = ['v1', 'v2', 'v3', 'v4', 'v5'];

// Emit SINGLE_VALUE
export function getSingleValue() {
  ///////// Write the solution in this block
  return of(SINGLE_VALUE);
  ///////// Write the solution in this block
}

// Emit all the values contained in MULTIPLE_VALUES
export function getMultipleValue() {
  ///////// Write the solution in this block
  return from(MULTIPLE_VALUES);
  ///////// Write the solution in this block
}
