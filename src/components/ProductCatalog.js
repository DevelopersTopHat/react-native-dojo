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

export default class ProductCatalog extends Component {
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.onPress(item);
          }}
          key={index}
          style={styles.item}>
          <Text style={styles.itemText}>{item.name + ' - $' + item.price}</Text>
          <Image
            style={styles.itemImage}
            source={{
              uri: item.image,
            }}
          />
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            {this.renderProducts(this.props.products)}
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
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
  },
});
