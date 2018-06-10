import React from 'react';
import Button from './Button'

const App = props => (
  <div>
    <Button do={() => (console.log('BUY ONE'))} label="Buy one"/>
    
    <Button do={() => (console.log('EAT ONE'))} label="Eat one"/>
  </div>
);

export default App;