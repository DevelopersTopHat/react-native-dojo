import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonComponent = props => {
  return (
    <View style={styles.container}>
      <Icon onPress={() => props.onPressRemove(props.item)} name="remove-circle" size={30} />
      <Icon onPress={() => props.onPressAdd(props.item)} name="add-circle" size={30} />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: 18,
  },
});
