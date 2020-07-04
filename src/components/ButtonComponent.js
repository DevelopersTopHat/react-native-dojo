import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// TODO: Fill out return for the button implementation exercise
const ButtonComponent = props => {
  return (
    <View style={styles.buttonContainer}>
      <Icon
        name="remove"
        size={30}
        color="white"
        onPress={() => {
          props.onPressRemove(props.item);
        }}
        style={styles.button}
      />
      <Icon
        name="add"
        size={30}
        color="white"
        onPress={() => {
          props.onPressAdd(props.item);
        }}
        style={styles.button}
      />
    </View>
  );
};

export default ButtonComponent;

// TODO
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#005457',
    borderRadius: 150,
  },
});
