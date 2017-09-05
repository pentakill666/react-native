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
} from 'react-native';

export default class loginHeader extends Component {
  render() {
    if(this.props.isActive == 1){
      return (
              <View style={styles.headerWrap}>
                <View style={styles.item}>
                    <View style={[styles.icircle,styles.active]}>
                      <Text style={[styles.ilabel,styles.ilabelActive]}>验证手机</Text>
                    </View>
                </View>
                <Image style={styles.icon}
                  resizeMode='stretch'
                  source={{uri:'http://i4.bvimg.com/596158/33625690c974bd52.png'}}/>
                <View style={styles.item}>
                    <View style={styles.icircle}>
                      <Text style={styles.ilabel}>填写密码</Text>
                    </View>
                </View>
              </View>
      );
    }else{
      return (
              <View style={styles.headerWrap}>
                <View style={styles.item}>
                    <View style={styles.icircle}>
                      <Text style={styles.ilabel}>验证手机</Text>
                    </View>
                </View>
                <Image style={styles.icon}
                  resizeMode='stretch'
                  source={{uri:'http://i4.bvimg.com/596158/33625690c974bd52.png'}}/>
                <View style={styles.item}>
                    <View style={[styles.icircle,styles.active]}>
                      <Text style={[styles.ilabel,styles.ilabelActive]}>填写密码</Text>
                    </View>
                </View>
              </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  headerWrap:{
    height:60,
    flexDirection:'row',
    marginBottom:15,
    alignItems:'center',
  },
  icon:{
    width:14,
    height:14
  },
  item:{
    flex:1,
    height:60,
    alignItems:'center',
  },
  icircle:{
    width:60,
    height:60,
    borderWidth:1,
    borderColor:'#696156',
    borderRadius:60,
  },
  active:{
    backgroundColor:'#3f3a36',
  },
  ilabel:{
    fontSize:12,
    textAlign:'center',
    lineHeight:37,
    color:'#5e5855'
  },
  ilabelActive:{
    color:'#fff'
  }
});
