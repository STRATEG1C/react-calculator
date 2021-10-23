import React from 'react';
import './index.css';

interface Props {
  text: string;
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

export const Button: React.FC<Props> = (props: Props) => {
  const { text, value, onClick, className = '' } = props;

  const onClickHandler = () => onClick(value);

  return <div className={`button ${className}`} onClick={onClickHandler}>{text}</div>
}

export default Button;
