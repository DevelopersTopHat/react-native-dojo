import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

const ShoppingCartIcon = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCount}>{props.cartItems.length}</Text>
        </View>
        <Icon name="shopping-cart" size={30} />
      </View>
    );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
};

export default connect(mapStateToProps)(ShoppingCartIcon);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    opacity: 0.7,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});