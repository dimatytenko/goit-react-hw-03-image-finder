import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.info('enter a value to search for!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.onSubmit(this.state);
      return;
    }

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
