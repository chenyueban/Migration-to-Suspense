import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// I did a little hack here to make mouse click interactive
import './registerMouseClick';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM
  .unstable_createRoot(document.getElementById('root'))
  .render(
    <React.unstable_ConcurrentMode>
      <App />
    </React.unstable_ConcurrentMode>
  );
