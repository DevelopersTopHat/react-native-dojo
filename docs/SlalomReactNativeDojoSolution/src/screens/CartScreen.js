/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import ProductCatalog from '../components/ProductCatalog';
import {connect} from 'react-redux';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../reducers/types';
class CartScreen extends Component {
  static navigationOptions = {
    headerTitle: 'My Cart',
  };
  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
