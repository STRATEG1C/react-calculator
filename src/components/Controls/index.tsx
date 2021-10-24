import React from 'react';
import Button from '../Button';
import './index.css';

interface Props {
  onClickControl: (value: string) => void;
}

const Controls: React.FC<Props> = (props: Props) => {
  const { onClickControl } = props;

  return (
    <div className="controls">
      <div className="row">
        <Button 
          text="AC" 
          value="AC" 
          onClick={onClickControl} 
          className="operator" 
        />
        <Button 
          text="Del" 
          value="Del" 
          onClick={onClickControl} 
          className="operator" 
        />
        <Button 
          text="*" 
          value="*" 
          onClick={onClickControl} 
          className="operator" 
        />
        <Button 
          text="/" 
          value="/" 
          onClick={onClickControl} 
          className="operator" 
        />
      </div>
      <div className="row">
        <Button 
          text="7" 
          value="7" 
          onClick={onClickControl} 
        />
        <Button 
          text="8" 
          value="8" 
          onClick={onClickControl} 
        />
        <Button 
          text="9" 
          value="9" 
          onClick={onClickControl} 
        />
        <Button 
          text="+" 
          value="+" 
          onClick={onClickControl} 
          className="operator" 
        />
      </div>
      <div className="row">
        <Button 
          text="4" 
          value="4" 
          onClick={onClickControl} 
        />
        <Button 
          text="5" 
          value="5" 
          onClick={onClickControl} 
        />
        <Button 
          text="6" 
          value="6" 
          onClick={onClickControl} 
        />
        <Button 
          text="-" 
          value="-" 
          onClick={onClickControl}  
          className="operator" 
        />
      </div>
      <div className="row">
        <Button 
          text="1" 
          value="1" 
          onClick={onClickControl} 
        />
        <Button 
          text="2" 
          value="2" 
          onClick={onClickControl} 
        />
        <Button 
          text="3" 
          value="3" 
          onClick={onClickControl} 
        />
        <Button 
          text="=" 
          value="=" 
          onClick={onClickControl} 
          className="operator-equal" 
        />
      </div>
      <div className="row">
        <Button 
          text="" 
          value="" 
          onClick={onClickControl} 
          className="invisible" 
        />
        <Button 
          text="0" 
          value="0" 
          onClick={onClickControl} 
        />
        <Button 
          text="" 
          value="" 
          onClick={onClickControl} 
          className="invisible" 
        />
      </div>
    </div>
  )
};

export default Controls;
