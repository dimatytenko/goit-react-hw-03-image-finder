import React, { Component } from 'react';
import styles from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

export default class App extends Component {
  state = {
    photos: [],
    searchValue: '',
    page: 1,
  };

  onSubmit = ({ inputValue }) => {
    this.setState({ searchValue: inputValue });
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.page}&key=24005703-1514437038890a8f3813970a7&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(responce => responce.json())
        .then(photos =>
          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos.hits],
          })),
        );
    }
  }

  render() {
    const { photos } = this.state;
    console.log(photos);

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <div className={styles.App}>
          <ImageGallery photos={photos} />
          {photos.length > 0 && (
            <Button onButtonClick={this.handleButtonClick} />
          )}
        </div>
        <ToastContainer />
      </div>
    );
  }
}
