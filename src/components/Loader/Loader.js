import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React, { Component } from 'react';

export class Loader extends Component {
  render() {
    return (
      <Spinner
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default Loader;
