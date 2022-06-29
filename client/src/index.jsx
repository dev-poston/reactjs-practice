import React from 'react';
import { createRoot } from 'react-dom/client';
import Submit from './components/submit.jsx';
import Search from './components/search.jsx';
import Gallery from './components/gallery.jsx';
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
      offset: 0,
      page: 1,
      pageLimit: 5,
      images: []
    }

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.resetState = this.resetState.bind(this);
    this.pageLeft = this.pageLeft.bind(this);
    this.pageRight = this.pageRight.bind(this);
  }

  componentDidMount() {
    console.log('Welcome to WheelTrader.com')
    API.readAll({page: this.state.page, pageLimit: this.state.pageLimit}, (err, data) => {
      if (err) {
        console.log('CDM ERROR: ', err);
      } else {
        console.log('CDM DATA: ', data.data);
        this.setState({
          images: data.data
        });
      }
    })
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

  pageLeft(e) {
    e.preventDefault();
    console.log('CLICK LEFT!')
    this.setState({
      page: this.state.page - 1
    }, () => {
      API.changePage({page: this.state.page, pageLimit: this.state.pageLimit}, (err, data) => {
        if (err) {
          console.log('CLIENTSIDE ERROR: ', err);
        } else {
          console.log('CLIENTSIDE DATA', data);
          this.setState({
            images: data.data
          });
        }
      })
    })
  }

  pageRight(e) {
    e.preventDefault();
    console.log('CLICK RIGHT!', e)
    this.setState({
      page: this.state.page + 1
    }, () => {
      API.changePage({page: this.state.page, pageLimit: this.state.pageLimit}, (err, data) => {
        if (err) {
          console.log('CLIENTSIDE ERROR: ', err);
        } else {
          console.log('CLIENTSIDE DATA', data);
          this.setState({
            images: data.data
          });
        }
      })
    })
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
        <Gallery
          page={this.state.page}
          images={this.state.images}
          pageLeft={this.pageLeft}
          pageRight={this.pageRight}
        />
      </div>
    )
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);