import React, { ChangeEvent } from 'react';
import './index.css';

interface Props {
  text: string;
  onInput: (text: string) => void;
}

export const Screen: React.FC<Props> = (props: Props) => {
  const { text, onInput } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onInput(value.replace(/[^0-9+\-*/]/g, ''));
  }

  return (
    <div className="screen">
      <input className="screen-input" value={text} onChange={onChangeHandler} />
    </div>
  )
}

export default Screen;

