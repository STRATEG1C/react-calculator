import React from 'react';
import Button from '../Button';
import './index.css';

const Controls: React.FC = () => {
  return (
    <div className="controls">
      <div className="row">
        <Button text="AC" value="7" onClick={() => false} className="operator" />
        <Button text="Del" value="8" onClick={() => false} className="operator" />
        <Button text="*" value="9" onClick={() => false} className="operator" />

        <Button text="/" value="9" onClick={() => false} className="operator" />
      </div>
      <div className="row">
        <Button text="7" value="7" onClick={() => false} />
        <Button text="8" value="8" onClick={() => false} />
        <Button text="9" value="9" onClick={() => false} />

        <Button text="+" value="9" onClick={() => false} className="operator" />
      </div>
      <div className="row">
        <Button text="4" value="4" onClick={() => false} />
        <Button text="5" value="5" onClick={() => false} />
        <Button text="6" value="6" onClick={() => false} />

        <Button text="-" value="9" onClick={() => false}  className="operator" />
      </div>
      <div className="row">
        <Button text="1" value="1" onClick={() => false} />
        <Button text="2" value="2" onClick={() => false} />
        <Button text="3" value="3" onClick={() => false} />

        <Button text="=" value="9" onClick={() => false} className="operator-equal" />
      </div>
    </div>
  )
};

export default Controls;
