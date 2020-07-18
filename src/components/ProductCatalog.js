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
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import ButtonComponent from './ButtonComponent';
import ExpandingTile from './ExpandingTile';
class ProductCatalog extends Component {
  constructor(props) {
    super(props);
  }

  // this function showcases the ability to call a function in the parent component from child component
  // by passing the function as a prop
  displayToast = () => {
    Toast.show('Image pressed!');
  };

  // an example of dynamic rendering of an unknown number of elements
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item.name + ' - $' + item.price}</Text>
          {/* The Product Catalog component is passing 3 props to its child component the Expanding Tile. Those props can be used inside the expanding tile. */}
          <ExpandingTile description={item.description} image={item.image} toast={this.displayToast} />
          {/* Similar to the Expanding tile, the button, there are 3 props being passed to the Button Component*/}
          <ButtonComponent
            item={item}
            onPressAdd={this.props.onPressAdd}
            onPressRemove={this.props.onPressRemove}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            {/* elements generated dynamically from a function returned as JSX */}
            {this.renderProducts(this.props.products)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProductCatalog;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Container grows to fit the number of elements
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#121212',
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
    backgroundColor: '#1F1F1F',
    width: '100%',
  },
  itemText: {
    fontSize: 18,
    color: '#E2E2E2',
    textAlign: 'center',
  },
});
