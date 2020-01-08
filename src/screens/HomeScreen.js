/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ProductCatalog from '../components/ProductCatalog';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <ProductCatalog />
      </View>
    );
  }
}

const styles = StyleSheet.create({});