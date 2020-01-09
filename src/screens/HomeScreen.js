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
import {connect} from 'react-redux';
class HomeScreen extends Component {
  render() {
    return (
      <View>
        <ProductCatalog onPress={this.props.addItemToCart}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: product => dispatch({type: 'ADD_TO_CART', payload: product})
  }
}

/**
 * Not passing the reducer any state, so the first param is null
 */
export default connect(null, mapDispatchToProps)(HomeScreen);
const styles = StyleSheet.create({});