/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class menber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}>
          <Image
           style={{width:375,height:620}}
           source={{uri:'http://i1.bvimg.com/596158/f600403a2051942f.png'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flex:1,
  },
  label: {
    marginBottom: 5,
  },
});
