import React from 'react';
import { createRoot } from 'react-dom/client';
import Submit from './components/submit.jsx';
import API from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    API.create({item: this.state.value}, (err, data) => {
      if (err) {
        console.log('FE API CREATE ERROR: ', err);
      } else {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div>
        <Submit
          submit={this.submit}
          onChange={this.onChange}
        />
      </div>
    )
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);