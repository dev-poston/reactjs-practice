import React from 'react';
import { createRoot } from 'react-dom/client';
import Submit from './components/submit.jsx';
import Search from './components/search.jsx';
import API from './API.js';
import './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      diameter: 0,
      width: 0,
      pattern: '',
      offset: 0
    }
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state)
    });
  }

  resetState() {
    this.setState({
      brand: '',
      model: '',
      diameter: 0,
      width: 0,
      pattern: '',
      offset: 0
    });
  }

  search(e) {
    e.preventDefault();
    API.readAll({item: this.state}, (err, data) => {
      if (err) {
        console.log('FE API CREATE ERROR: ', err);
      } else {
        console.log(data);
        this.resetState();
      }
    });
  }

  submit(e) {
    e.preventDefault();
    API.create({item: this.state}, (err, data) => {
      if (err) {
        console.log('FE API CREATE ERROR: ', err);
      } else {
        console.log(data);
        this.resetState();
      }
    });
  }

  render() {
    return (
      <div>
        <h1>WheelTrader.com</h1>
        <Submit
          submit={this.submit}
          onChange={this.onChange}
        />
        <Search
          search={this.search}
        />
      </div>
    )
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);