import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CatalogScreen from '../components/ProductCatalog';
import ShoppingCartIcon from '../components/ShoppingCartIcon';

export default class ShoppingCart extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Catalog: CatalogScreen
}, {
  navigationOptions: {
    headerTitle: 'Shopping App',
    headerRight: (
      <ShoppingCartIcon />
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});