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
  ImageBackground,
  Alert,
} from 'react-native';
import Inputbox from './inputbox';
import LogBtn from './loginBtn';
import RadioBtn from './radioBtn';
export default class menber extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={{uri:'http://i1.bvimg.com/596158/447177f3a2971610.png'}}
        resizeMode='stretch'
        >
        <View style={styles.main}>
          <View>
              <Text style={styles.title}>已有账号</Text>
              <View style={styles.wrap}>
                  <Inputbox placeholder='请输入手机号'/>
                  <Inputbox placeholder='请输入密码' isHide={true} />
                  <LogBtn title='立即登录' />
              </View>
              <Text style={styles.title}>没有账号</Text>
              <View style={styles.wrap}>
                  <LogBtn title='立即注册'/>
              </View>
              <RadioBtn label='同意并接受《XXX会员协议》'/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:34,
    paddingBottom:34,
    paddingLeft:28,
    paddingRight:28,
  },
  main: {
    paddingTop:26,
    paddingBottom:26,
    paddingLeft:36,
    paddingRight:36,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  wrap:{
    paddingLeft:25,
    paddingRight:25,
    marginBottom:20,
  },
  title:{
    fontSize:16,
    textAlign:'center',
    marginBottom:15,
  },
});
