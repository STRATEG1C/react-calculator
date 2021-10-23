import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import userEvent from '@testing-library/user-event';

describe('Test Application', () => {
  const buttonsToTypeExpression = ['2', '+', '2', '*', '2'];
  const buttonsToTypeWrongExpression = ['2', '/', '0'];
  const EXPECTED_CALCULATED_VALUE = "6";
  const ERROR_VALUE = 'Error';

  it('Should be rendered', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('Should input text on button clicks', () => {
    const { getByTestId, getByText } = render(<App />);
    const screen = getByTestId('screen-input') as HTMLInputElement;

    expect(screen.value).toBe('');

    buttonsToTypeExpression.forEach((text) => {
      const button = getByText(text);
      userEvent.click(button);
    });

    expect(screen.value).toBe(buttonsToTypeExpression.join(''));
  });

  it('Should delete text if click on Del button', () => {
    const { getByTestId, getByText } = render(<App />);
    const screen = getByTestId('screen-input') as HTMLInputElement;

    expect(screen.value).toBe('');

    userEvent.click(getByText('1'));
    userEvent.click(getByText('2'));
    userEvent.click(getByText('Del'));

    expect(screen.value).toBe('1');
  });

  it('Should remove all text if click on AC button', () => {
    const { getByTestId, getByText } = render(<App />);
    const screen = getByTestId('screen-input') as HTMLInputElement;

    expect(screen.value).toBe('');

    userEvent.click(getByText('1'));
    userEvent.click(getByText('2'));
    userEvent.click(getByText('AC'));

    expect(screen.value).toBe('');
  });

  it('Should calculate values', () => {
    const { getByTestId, getByText } = render(<App />);
    const screen = getByTestId('screen-input') as HTMLInputElement;
    const makeCalculationButton = getByText('=');

    expect(screen.value).toBe('');

    buttonsToTypeExpression.forEach((text) => {
      const button = getByText(text);
      userEvent.click(button);
    });

    userEvent.click(makeCalculationButton);

    expect(screen.value).toBe(EXPECTED_CALCULATED_VALUE);
  });

  it('Should give an error while division on zero', () => {
    const { getByTestId, getByText } = render(<App />);
    const screen = getByTestId('screen-input') as HTMLInputElement;
    const makeCalculationButton = getByText('=');

    expect(screen.value).toBe('');

    buttonsToTypeWrongExpression.forEach((text) => {
      const button = getByText(text);
      userEvent.click(button);
    });

    userEvent.click(makeCalculationButton);

    expect(screen.value).toBe(ERROR_VALUE);
  });
});
