/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {electronics} from '../services/DataService';

export default class ProductCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
    };
  }

  componentDidMount() {
    this.setState({catalog: electronics});
  }

  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.item}>
          <TouchableOpacity onPress={() => {}} style={styles.addItem}>
            <Text style={styles.itemText}>
              {item.name + ' - $' + item.price}
            </Text>
            <Image
              style={styles.itemImage}
              source={{
                uri: item.image,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            {this.renderProducts(this.state.catalog)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#FAEED4',
  },
  itemContainer: {
    marginVertical: 20,
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(250, 128, 123, 0.5)',
    width: '100%',
  },
  itemImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  itemText: {
    fontSize: 18,
  },
  addItem: {},
});
