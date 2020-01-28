import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ShoppingCartIcon from './components/ShoppingCartIcon';

export default class ShoppingCart extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      headerTitle: 'Shopping App',
      headerRight: <ShoppingCartIcon />,
    },
  },
);
