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
      expanded: false,
      description: props.description,
      image: props.image,
      parentToast: props.toast
    };
  }

  // TODO
  toggleDescriptionDisplay = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    // Optional TODO: use object destructuring to make it more convenient to access state
    const {expanded, description, image, parentToast} = this.state;

    // TODO: expand the tile to include description based on a state
    return (
      <TouchableOpacity
        onPress={() => {
          this.toggleDescriptionDisplay();
          parentToast();
        }}>
        <Image
          style={styles.itemImage}
          source={{
            uri: image,
          }}
        />
        <View style={styles.descriptionContainer}>
          {expanded && <Text style={styles.description}>{description}</Text>}
        </View>
      </TouchableOpacity>
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
  descriptionContainer: {
    width: '100%',
  },
  description: {
    color: '#E2E2E2',
    fontSize: 18,
    textAlign: 'center',
  },
});
