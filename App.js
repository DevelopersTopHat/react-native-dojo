/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import ShoppingCart from './src/ShoppingCart';
import {Provider} from 'react-redux';
import store from './src/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    );
  }
}
