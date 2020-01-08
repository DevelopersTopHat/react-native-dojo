/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { electronics } from '../services/DataService';

export default class ProductCatalog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catalog: []
    };
  }

  componentDidMount() {
    this.setState({catalog: electronics});
  }

  renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.item}>
          <TouchableOpacity onPress={() => {}} style={styles.addItem}>
            <Text>{item.name + ' - $' + item.price}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.renderProducts(this.state.catalog)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20
  },
  addItem: {

  }
});