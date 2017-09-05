import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

import LoginHeader from './loginHeader';
import Inputbox from './inputbox';
import LogBtn from './loginBtn';
import RadioBtn from './radioBtn';
export default class menber extends Component {
  static navigationOptions = {
    headerTitle:'设置密码',
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.container}
        source={{uri:'http://i1.bvimg.com/596158/447177f3a2971610s.png'}}
        resizeMode='stretch'
        >
        <LoginHeader/>
        <View style={styles.main}>
          <View>
              <Text style={styles.title}>请输入密码</Text>
              <View style={styles.wrap}>
                  <Inputbox placeholder='' isHide={true}/>
              </View>
              <Text style={styles.title}>请重复密码</Text>
              <View style={styles.wrap}>
                  <Inputbox placeholder='' isHide={true}/>
                  <LogBtn title='立即注册' link={()=>navigate('login')}/>
              </View>
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
