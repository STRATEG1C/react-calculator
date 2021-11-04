import React, { useState } from 'react';
import Controls from '../Controls';
import Screen from '../Screen';
import './index.css';
import { removeSpaces } from '../../helpers';

export const App: React.FC = () => {
  const [text, setText] = useState('');

  const calculate = () => {
    try {
      if (text.includes('/0')) {
        throw new Error();
      }
      if (text !== 'Error') {
        setText(eval(text).toString());
      }
    } catch (err) {
      setText('Error');
    }
  }

  const addToText = (value: string) => {
    switch (value) {
      case 'AC': setText(''); break;
      case 'Del': setText((prev) => prev.slice(0, -1)); break;
      case '=': calculate(); break;
      default: setText((prev) => `${prev}${value}`);
    }
  }

  const inputText = (text: string) => {
    setText(removeSpaces(text));
  }

  return (
    <div className="calculator-container">
      <Screen text={text} onInput={inputText} />
      <Controls onClickControl={addToText} />
    </div>
  );
}

export default App;
