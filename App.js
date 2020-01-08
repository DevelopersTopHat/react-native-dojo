/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import ShoppingCart from './src/screens/ShoppingCart';
export default class App extends Component {
  render() {
    return <ShoppingCart />;
  }
}

const styles = StyleSheet.create({});