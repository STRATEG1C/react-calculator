import { removeSpaces } from './index';

describe('Test helpers', () => {
  it('Should clear spaces', () => {
    const INPUT_VALUE = '1 2 3';
    const EXPECTED_VALUE = '123';

    expect(removeSpaces(INPUT_VALUE)).toBe(EXPECTED_VALUE);
  });
});
