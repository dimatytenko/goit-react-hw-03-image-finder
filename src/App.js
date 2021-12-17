import React, { Component } from 'react';
import styles from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhotoInfo from 'components/PhotoInfo';
import Searchbar from 'components/Searchbar';

export default class App extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = ({ inputValue }) => {
    this.setState({ searchValue: inputValue });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <PhotoInfo value={this.state.searchValue} />
        <ToastContainer />
      </div>
    );
  }
}
