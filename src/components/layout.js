import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Member from './member';
import Login from './login';
import MobileValidate from './mobileValidate';
import SetPwd from './setPwd';
const layout = StackNavigator({
  login:{
    screen:Login,
  },
  member:{
    screen:Member,
  },
  mobileValidate:{
    screen:MobileValidate,
  },
  setPwd:{
    screen:SetPwd,
  }
},{
  navigationOptions:{
    headerStyle:{
      backgroundColor:'#000',
      height:50,
    },
    headerTitleStyle:{
      color:'#fff',
      alignSelf:'center'
    },
    headerTintColor:'#fff',
    headerMode: 'screen',
    transitionConfig:()=>({
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    })
  }
}
)
export default layout
