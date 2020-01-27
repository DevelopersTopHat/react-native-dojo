import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Fill out the return for exercise 1
const ButtonComponent = props => {
  return (
    <>
    </>
  );
};

// Needed for exercise 2
const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(ButtonComponent);

const styles = StyleSheet.create({
  
});
