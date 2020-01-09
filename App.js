/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import ShoppingCart from './src/screens/ShoppingCart';
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

const styles = StyleSheet.create({});
