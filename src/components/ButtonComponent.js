import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Fill out the return for exercise 1
const ButtonComponent = props => {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => {
          if (props.cartItems.length > 0) {
            props.onPressRemove(props.item);
          }
        }}
        name="remove-circle"
        size={30}
      />
      <Icon
        onPress={() => props.onPressAdd(props.item)}
        name="add-circle"
        size={30}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
