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

import DataService from '../services/DataService';
import {ADD_TO_CART} from '../reducers/types';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  async componentDidMount() {
    const dataService = new DataService();
    const electronics = await dataService.getElectronicProducts();
    this.setState({products: electronics});
  }

  render() {
    return (
      <>
        {this.state.products && (
          <View>
            <ProductCatalog
              onPress={this.props.addItemToCart}
              products={this.state.products}
            />
          </View>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({type: ADD_TO_CART, payload: product}),
  };
};

/**
 * Not passing the reducer any state, so the first param is null
 */
export default connect(null, mapDispatchToProps)(HomeScreen);
