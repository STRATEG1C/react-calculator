import { render } from '@testing-library/react';
import Controls from './index';

describe('Test Controls component', () => {
  const buttonsToTest = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'AC', 'Del'
  ];

  it('Should be rendered', () => {
    const { container, getByText } = render(
      <Controls onClickControl={() => false} />
    );

    buttonsToTest.forEach((text) => {
      expect(getByText(text)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
