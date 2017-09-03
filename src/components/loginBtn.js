/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class loginBtn extends Component {
  render() {
    return (
            <Text style={styles.lowrap}>
              {this.props.title}
            </Text>
    );
  }
}
const styles = StyleSheet.create({
  lowrap:{
      height:36,
      borderRadius:4,
      marginTop:20,
      backgroundColor:'#625d59',
      textAlign:'center',
      color:'#fff',
      lineHeight:26,
  }
});
