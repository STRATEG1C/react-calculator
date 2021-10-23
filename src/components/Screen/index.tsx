import React from 'react';
import './index.css';

interface Props {
  text: string;
}

export const Screen: React.FC<Props> = (props: Props) => {
  const { text } = props;

  return (
    <div className="screen">
      <input className="screen-input" value={text} />
    </div>
  )
}

export default Screen;

