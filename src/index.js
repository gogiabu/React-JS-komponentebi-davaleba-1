import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentX from './ComponentX';




class App extends React.Component {
  render() {
    return <ComponentX></ComponentX>
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
