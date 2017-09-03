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
  Image,
  TextInput
} from 'react-native';

export default class inputbox extends Component {
  render() {
    return (
            <View>
              <TextInput
              style={styles.input}
              keyboardType='numeric'
              underlineColorAndroid="transparent"
              secureTextEntry={this.props.isHide}
              placeholder={this.props.placeholder}/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{
      borderWidth:1,
      borderColor:'#ccc',
      height:36,
      borderRadius:4,
      marginBottom:10,
  }
});
