import React from 'react';
import Controls from '../Controls';
import Screen from '../Screen';
import './index.css';

export const App: React.FC = () => {
  return (
    <div className="calculator-container">
      <Screen text="1+2" />
      <Controls />
    </div>
  );
}

export default App;
