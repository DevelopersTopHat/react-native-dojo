import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {View} from 'react-native';

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
      headerTintColor: '#E2E2E2',
      headerStyle: { 
        backgroundColor: '#1F1F1F'
      },
      headerTitleStyle: { 
        color: '#E2E2E2',
        textAlign: 'center',
        flex: 1
      },
    },
  },
);
