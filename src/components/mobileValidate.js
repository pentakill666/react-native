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
import LoginHeader from './loginHeader';
export default class mobileValidate extends Component {
  static navigationOptions = {
    headerTitle:'手机验证',
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
        <LoginHeader isActive='1'/>
        <View>
          <View style={styles.item}>
            <View style={styles.circle}></View>
          </View>
          <View style={styles.item}>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View style={styles.main}>
          <View>
              <Text style={styles.title}>已有账号</Text>
              <View style={styles.wrap}>
                  <Inputbox placeholder='请输入手机号'/>
                  <LogBtn title='获取手机验证码' />
              </View>
              <Text style={styles.title}>若该手机无法接受短信，请联系客服</Text>
              <Text style={styles.title}>400-400-400</Text>
              <View style={styles.wrap}>
                  <Inputbox placeholder='请输入验证码'/>
                  <LogBtn title='下一步' link={()=>navigate('setPwd')}/>
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
  item:{
    flex:1,
    alignItems:"center"
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
