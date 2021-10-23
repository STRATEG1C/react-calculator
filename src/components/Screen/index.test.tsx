import { render } from '@testing-library/react';
import Screen from './index';
import userEvent from '@testing-library/user-event';

describe('Test screen component', () => {
  const SCREEN_TEXT = '2+2*2';
  const onInputStub = jest.fn();

  const PROPER_TEXT_TO_TEST = '1';
  const BAD_TEXT_TO_TEST = 'a';

  it('Should be rendered', () => {
    const { getByTestId } = render(<Screen text={SCREEN_TEXT} onInput={onInputStub} />);

    const screen = getByTestId('screen-input') as HTMLInputElement;

    expect(screen).toBeInTheDocument();
    expect(screen.value).toBe(SCREEN_TEXT);
    expect(screen).toMatchSnapshot();
  });

  it('Should react on input', () => {
    const { getByTestId } = render(<Screen text={SCREEN_TEXT} onInput={onInputStub} />);

    const screen = getByTestId('screen-input');

    userEvent.type(screen, PROPER_TEXT_TO_TEST);

    expect(onInputStub).toBeCalledWith(SCREEN_TEXT + PROPER_TEXT_TO_TEST);
  });

  it('Should not allow to input wrong characters', () => {
    const { getByTestId } = render(<Screen text={SCREEN_TEXT} onInput={onInputStub} />);

    const screen = getByTestId('screen-input');

    userEvent.type(screen, BAD_TEXT_TO_TEST);

    expect(onInputStub).toHaveBeenCalledWith(SCREEN_TEXT);
  });
});
