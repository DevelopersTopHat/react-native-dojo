import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Fill out the return for exercise 1
const ButtonComponent = props => {
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => {
          props.onPressRemove(props.item);
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
