import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);