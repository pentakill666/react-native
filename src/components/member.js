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
} from 'react-native';
import ListItem from './listItem';
export default class menber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode='stretch'
          style={styles.header}
          source={require('../img/index_header_bg.png')}>
          <View style={styles.userInfo}>
            <View style={styles.user}>
              <View style={styles.avatarWrap}>
                <Image source={require('../img/avatar.jpg')}
                  resizeMode='stretch'
                  style={styles.avatar}
                />
                <View style={styles.nicknameWrap}>
                  <Text style={styles.nickname}>夏目林子</Text>
                </View>
              </View>
            </View>
            <View style={styles.memberInfo}>
              <ImageBackground
                resizeMode='stretch'
                style={styles.memberBg}
                source={require('../img/member_info_bg.png')}>
                <View style={styles.member}>
                  <Image style={styles.arrow}
                  source={require('../img/member_info_crown.png')}
                  resizeMode='stretch'
                  />
                  <View style={styles.numWrap}>
                    <Text style={styles.num}>9999</Text>
                    <View style={styles.numUpWrap}>
                      <Image style={styles.numUp}
                        source={require('../img/up_bg.png')}
                        resizeMode='stretch'
                        />
                    </View>
                  </View>
                  <Text style={styles.type}>高级会员</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.btnGroup}>
            <View style={styles.btnWrap}>
              <View style={styles.btn}>
                <Text style={styles.font}>消费记录></Text>
              </View>
            </View>
            <View style={styles.btnWrap}>
              <View style={styles.btn}>
                <Text style={styles.font}><Text style={styles.integral}>9999</Text>积分></Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.listWrap}>
          <View style={styles.listTitle}>
            <View style={styles.titleWrap}>
              <Image style={styles.benefitIcon}
                source={require('../img/benefits_icon.png')}
                resizeMode='stretch'
              />
              <Text style={styles.title}>会员权益</Text>
            </View>
          </View>
          <View style={styles.detailBtnWrap}>
            <Text style={styles.detailBtn}>详情</Text>
          </View>
          <View>
            <ListItem
            imgurl={require('../img/benefits_icon1.png')}
            ilabel='权益'
            info=' 会员权益规则由pc管理端添加，举例：每消费1元 可以额外获得1点成长值'
            />
            <ListItem
            imgurl={require('../img/benefits_icon2.png')}
            ilabel='权益'
            info=' 会员权益规则由pc管理端添加，举例：每消费1元 可以额外获得1点成长值'
            />
            <ListItem
            imgurl={require('../img/benefits_icon3.png')}
            ilabel='权益'
            info=' 会员权益规则由pc管理端添加，举例：每消费1元 可以额外获得1点成长值'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    height:227,
    flexDirection:'column',
    justifyContent:'flex-end'
  },
  userInfo:{
    height:122,
    marginBottom:15,
    flexDirection:'row'
  },
  user:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap:{
    flexDirection:'row',
    justifyContent: 'center',
    paddingLeft:15,
  },
  avatar:{
    width:48,
    height:48,
    borderRadius:48,
    borderWidth:1,
    borderColor:'#6f665c',
  },
  nicknameWrap:{
    flex:1,
    height:50,
    justifyContent:'center',
    paddingLeft:10
  },
  nickname:{
    color:'#fff',
    fontSize:14
  },
  memberInfo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberBg:{
    width:122,
    height:122,
  },
  member:{
    justifyContent:'center',
    alignItems:'center'
  },
  numWrap:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  num:{
    fontSize:24,
    color:'#ecd9bd',
    flex:1,
    textAlign:'right',
    paddingRight:5
  },
  numUpWrap:{
    width:30
  },
  numUp:{
    width:10,
    height:16,
    marginLeft:6,
  },
  type:{
    fontSize:14,
    color:'#fff'
  },
  arrow:{
    width:25,
    height:20,
    marginTop:20
  },
  btnGroup:{
    height:58,
    flexDirection:'row'
  },
  btnWrap:{
    flex:1,
    paddingLeft:10,
    paddingRight:5
  },
  btn:{
    height:58,
    backgroundColor:'#62605d',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
  },
  font:{
    color:'#bdbbb9',
    fontSize:16,
  },
  integral:{
    color:'#ecd9bd'
  },
  listWrap:{
    padding:15,
  },
  listTitle:{
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    marginBottom:10
  },
  benefitIcon:{
    width:15,
    height:18,
    marginTop:2
  },
  titleWrap:{
    flexDirection:'row'
  },
  title:{
    fontSize:16,
  },
  detailBtnWrap:{
    position:'absolute',
    right:15,
    top:15,
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
  },
  detailBtn:{
    fontSize:12,
  },
});
