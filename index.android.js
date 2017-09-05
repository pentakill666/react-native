/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Test from './src/components/layout';
export default class app extends Component {
  render() {
    return (
      <Test/>
    );
  }
}

AppRegistry.registerComponent('app', () => app);
