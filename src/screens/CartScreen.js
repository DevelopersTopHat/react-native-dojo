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

class CartScreen extends Component {
  static navigationOptions = {
    headerTitle: 'My Cart',
  };
  render() {
    return (
      <View>
        {this.props.cartItems.length > 0 && (
          <ProductCatalog
            onPress={this.props.removeItem}
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
    removeItem: product =>
      {
        dispatch({type: 'REMOVE_FROM_CART', payload: product})
      },
  };
};

/**
 * Not passing the reducer any state, so the first param is null
 */
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
