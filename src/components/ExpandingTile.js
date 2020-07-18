/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
class ExpandingTile extends Component {
  constructor(props) {
    super(props);

    // TODO: add state to support toggling description
    // Optional TODO: map parent props passed to child to component level state
    this.state = {
      image: props.image
    };
  }

  // TODO: toggle the description display by manipulating the state of whether it is shown or not
  toggleDescriptionDisplay = () => {

  };

  render() {
    // Optional TODO: use object destructuring to make it more convenient to access state
    // You can add more to the object destructuring by doing {image, myStateHere}. Your state must exist in this.state in the constructor
    const {image} = this.state;

    // TODO: wrap the image in a container element with an onPress property. Hint: a pressable element has been imported in this file.
    // TODO: expand the tile to include description based on a state controlled by onPress
    // TODO: display image passed in by parent
    // TODO: call parent method for displaying toast onPress
    return (
      <Image
        style={styles.itemImage}
        source={{ uri: image}}
      />
    );
  }
}

export default ExpandingTile;

// TODO: make it look nice
const styles = StyleSheet.create({
  itemImage: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 8,
  },
  descriptionContainer: { },
  description: { },
});
