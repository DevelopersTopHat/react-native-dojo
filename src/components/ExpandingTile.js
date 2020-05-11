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

    this.state = {
      expanded: false,
      description: props.description,
      image: props.image,
      name: props.name
    };
  }

  toggleDescriptionDisplay = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {
    const {expanded, description, image, name} = this.state;
    return (
      <TouchableOpacity
        onPress={() => {
          this.toggleDescriptionDisplay();
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
