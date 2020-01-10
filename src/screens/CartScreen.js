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
        {this.props.cartItems.length > 0 && (
          <ProductCatalog
            onPressAdd={this.props.addItemToCart}
            onPressRemove={this.props.removeItemFromCart}
            products={this.props.cartItems}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: ADD_TO_CART, payload: product}),
    removeItemFromCart: product => dispatch({type: REMOVE_FROM_CART, payload: product})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
