import { render } from '@testing-library/react';
import Button from './index';
import userEvent from '@testing-library/user-event';

describe('Test Button component', () => {
  const BUTTON_TEXT = 'abc';
  const BUTTON_VALUE = 'abc';

  const onClickStub = jest.fn();

  it('Should be rendered', () => {
    const { getByText } = render(
      <Button
        text={BUTTON_TEXT}
        value={BUTTON_VALUE}
        onClick={() => false}
      />
    );

    const button = getByText(BUTTON_TEXT);

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(BUTTON_TEXT);
    expect(button).toMatchSnapshot();
  });

  it('Should react on click', () => {
    const { getByText } = render(
      <Button
        text={BUTTON_TEXT}
        value={BUTTON_VALUE}
        onClick={onClickStub}
      />
    );

    const button = getByText(BUTTON_TEXT);

    userEvent.click(button);

    expect(onClickStub).toHaveBeenCalledWith(BUTTON_VALUE);
  });
});
